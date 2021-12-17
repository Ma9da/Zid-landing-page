import App from './App.vue'
import Vue from 'vue'
import "bootstrap/dist/css/bootstrap.rtl.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import "./assets/css/main.css"
library.add(fab, fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
import "bootstrap/dist/js/bootstrap.min.js"
