import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LightTimeline from 'vue-light-timeline';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Routes)
Vue.use(BootstrapVue)
Vue.use(LightTimeline);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})


new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
