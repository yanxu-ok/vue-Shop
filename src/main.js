import Vue from 'vue'
import App from './App'
import router from './route'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
Vue.use(ElementUI);
import axios from './axios/request'
Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
