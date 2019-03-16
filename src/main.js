import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes/router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import LightTimeline from 'vue-light-timeline';
import VueCarousel from 'vue-carousel';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Routes)
Vue.use(BootstrapVue)
Vue.use(LightTimeline);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})


new Vue({
  render: h => h(App),
  router : router
}).$mount('#app')
