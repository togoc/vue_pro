import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './http'
import moment from 'moment'
Vue.prototype.$moment = moment

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')