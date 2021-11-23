import Vue from 'vue'
import './plugins/fontawesome'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element'
import './plugins/langnang'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
