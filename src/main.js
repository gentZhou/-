import Vue from 'vue'

import App from './App'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
  //1.注册组件APP 2.使用组件 3.渲染组件
}).$mount('#app')
