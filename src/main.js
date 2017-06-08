// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app',

  data: {
    message: 'You are accessing this page on: '+ new Date(),
    welcome: 'This is Diannes tutorial point. The best worldwide, hover the mouse over this to see more.',
    h3: 'Learning Vue.js',
    p: 'Its Wednesday: welcome to Diannes tutorial point.',
    fruit: 'mango',
    fruit2: 'passion',
    pudding: 'fruitshake',
    pudding1: 'fruitshake',
    cp: 'computed properties',
    wp: 'watch properties',
    checkedNames: [],
    gender: 'Invalid gender input',
    f: 'female',
    m: 'male',
    cr: 'conditional rendering',
    // message: 'male',
    lr: 'List rendering',
    fib: 'Form input bindings',
    items: [
      { message: 'Node.js' },
      { message: 'Vue.js' },
      { message: 'Webpack' }
    ],
  	activeColor: 'violet',
  	fontSize: 20
 },

  methods: {
    reverseMessage: function () {
      this.p = this.p.split('').reverse().join('')
    },
    // computed property
    pudding: function () {
      return this.fruit + ' ' + this.fruit2
    },
    // watch property
    fruit: function (value) {
      this.pudding1 = value + ' ' + this.fruit2
    },
    fruit2: function (value) {
      this.pudding1 = this.fruit + ' ' + value
    }
  }
})

