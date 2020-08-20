import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Detail from '@/pages/Detail';
import AddCartSuccess from '@/pages/AddCartSuccess'

export default [
    //专门配置各种路由的地方
    //路由和组件的映射关系
    {
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        path:'/detail/:skuId',
        component:Detail
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/search/:keyword?',
        name: 'search',
        component: Search,
        // props:true,//布尔值写法: 代表只是把params参数通过属性传递给相应的组件
        // props:{name:'白菜'}//对象写法,只能传递静态的数据 几乎不用 因为需要额外传递静态数据才会用到
        // props(route) {//route 收集好参数的路由对象
        //     //把传递过来的params参数和query参数一起映射为组件的属性()
        //     return {
        //         keyword2: route.params.keyword,
        //         keyword3: route.query.keyword
        //     }
        // }

    },
    {
        path: '/login',
        component: Login,
        meta: {
            isHide: true   //证明要隐藏footer
        }
    },
    {
        path: '/register',
        component: Register,
        meta: {
            isHide: true   //证明要隐藏footer
        }
    },
    //重定向
    {
        path: '/',
        redirect: 'home'
    }

]