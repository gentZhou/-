import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from '@/router/routes'
import store from '@/store'
Vue.use(VueRouter)
//声明使用插件  vue的插件都要去声明使用 第三方免了

const originPush = VueRouter.prototype.push;;
const originReplace = VueRouter.prototype.replace;

VueRouter.prototype.push = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originPush.call(this, location).catch(() => { });
    } else {
        return originPush.call(this, location, onResolved, onRejected)
    }
}
VueRouter.prototype.replace = function (location, onResolved, onRejected) {
    if (onResolved === undefined && onRejected === undefined) {
        return originReplace.call(this, location).catch(() => { });
    } else {
        return originReplace.call(this, location, onResolved, onRejected)
    }
}




//暴露出去的是路由器
const router = new VueRouter({
    routes,
    //控制跳转之后滚动位置在哪里
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})

router.beforeEach((to,from,next)=>{
    //to 代表目标(准备去到的组件) 路由对象
    //from 代表其实(从哪个组件) 路由对象
    //next: 放行还是不放行  是个函数
    //next() 放行
    //next(false) 不放行 停在当前位置
    //next('/') 代表跳到指定的路径对应的组件
    let targetPath = to.path
    if(targetPath.indexOf('/trade')=== 0 || targetPath.startsWith('/pay') || targetPath.startsWith('/center')){
        //代表你要去的地方需要判断用户是否登录
        if(store.state.user.userInfo.name){
            next()
        }else{
            next('/login?redirect='+targetPath)
        }
    }else{
        next()
    }
})



export default router