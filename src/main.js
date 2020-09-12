import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import SliderLoop from '@/components/SliderLoop'
import TypeNav from '@/components/TypeNav'
import pagination from '@/components/Pagination'
import * as API from '@/api'
import './validate.js'

//部分引入element-ui当中的 Message, MessageBox
import { Message, MessageBox ,Pagination} from 'element-ui';

Vue.use(Pagination);
// Vue.component(Pagination.name,Pagination)
//声明使用
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;

//需要引入
import VueLazyload from 'vue-lazyload'
//使用的图片
import loading from '@/assets/timg.gif'

Vue.use(VueLazyload,{
  loading,
})


Vue.config.productionTip = false;

Vue.component('pagination',pagination)
Vue.component('TypeNav', TypeNav);
Vue.component('SliderLoop', SliderLoop);

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this//配置全局事件总线

    Vue.prototype.$API = API 
  },
  render: h => h(App),
  //1.注册组件APP 2.使用组件 3.渲染组件
  router,
  store,

}).$mount('#app')
