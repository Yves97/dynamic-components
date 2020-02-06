import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'

import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
Vue.component('app-home',Home)
Vue.component('app-about',About)
Vue.component('app-contact',Contact)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
