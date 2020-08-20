/*  
1.配置记住路径和限时限制
2.添加进度条信息 nprogress
3.返回的响应不再需要从data属性当中拿数据,而是响应就是我们要的数据
4.同一处理请求错误,具体请求也可以选择处理或不处理

一般我们在二次封装axios的时候不会直接在axios身上操作
而是通过create创建一个新的axios实例进行操作
*/
import axios from 'axios'
//创建一个新的axios实例
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import 'nprogress/nprogress.css' from 'nprogress/nprogress.css'
//1
const instance = axios.create({
    baseURL: '/api',     //配置请求基础路径
    timeout: 30000,//配置请求超时时间
});

//请求和响应拦截器

//请求拦截器当中添加打开进度条的功能
instance.interceptors.request.use(
    config => {
        //处理config(处理请求报文)
        //添加额外的功能 (使用进度条)
        NProgress.start();

        return config
        //返回这个config  请求继续发送 发送的报文信息就是新的config对象
    }
)

//响应拦截器
instance.interceptors.response.use(
    response => {
        //3
        //默认返回的是response 也就是我们的响应报文信息 如果我们要拿到数据  
        //通过response.data去获取
        //现在我们是在返回响应之前把响应直接改成了数据,以后我们拿数据不需要再去data了
        // console.log(response.data)
        NProgress.done();
        return response.data
    },
    error => {
        //4
        alert('客官,发送请求失败了哦' + error.message || '未知错误')

        //如果需要进一步去处理这个错误,那么久返回一个失败的promise
        // return Promise.reject(new Error('请求失败'))
        //如果你不需要再去处理这个错误,那么就返回一个pending状态的promise(终止promise链)
        NProgress.done();
        return new Promise(() => { })
    }
)

export default instance