import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
import '@/mock/mockServer'
import SliderLoop from '@/components/SliderLoop'
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/Pagination'
// import { reqCategoryList } from '@/api'

// reqCategoryList()

Vue.config.productionTip = false;

Vue.component('Pagination',Pagination)
Vue.component('TypeNav', TypeNav);
Vue.component('SliderLoop', SliderLoop);

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this;//配置全局事件总线
  },
  render: h => h(App),
  //1.注册组件APP 2.使用组件 3.渲染组件
  router,
  store,

}).$mount('#app')
