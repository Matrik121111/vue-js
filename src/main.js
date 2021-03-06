import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueObserveVisibility from 'vue-observe-visibility'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueObserveVisibility)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')