import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from '@/router/routes'
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

export default router