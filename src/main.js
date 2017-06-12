import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Routes from './routes'
import store from './store'
import VueAuthenticate from 'vue-authenticate'

Vue.config.productionTip = false

// Using the VueRouter
Vue.use(VueRouter);

// Implementing the Vue Resource
Vue.use(VueResource);

// Implementing the Vuex
Vue.use(Vuex);

// Creating an instance of the vue router
const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  render: h=>h(App),
  store,
  data() {
    return {
    }
  },
// Making use of the created instance
router: router
})




