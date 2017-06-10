// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
// import First from '../first'

Vue.config.productionTip = false

//////////////////////////////////////////////////////////////////////
//Plugins
//a basic plugin that writes to the console every time a component is mounted to the DOM.
const PluginOne = {
  install(Vue, options) {
    Vue.mixin({
      mounted() {
        console.log('The plugin is working yeeeey!!!!!!');
      }
    });
  }
};
export default PluginOne;


////////////////////////////////////////////////////////////////////////

//Single file component is demonstrasted in the Hello.vue under components 
//whereby the template, script and style are all under one component and not separeted

////////////////////////////////////////////////////////////////////////
//  MIXINS
// defining a mixin object: firstMixin
var firstMixin = {
  created: function () {
    this.msg()
  },
  methods: {
    msg: function () {
      alert('Experience being mixed by mixins')
    }
  }
}
// defining a component that uses the created mixin
var Mix = Vue.extend({
  mixins: [firstMixin]
})
var component = new Mix() 
//////////////////////////////////////////////////////

// local registration
var Shape = {
  template: '<div> Local registration of a component</div>'
}

//Props
Vue.component('child', {
  //props declaration
  props: ['message'],
  template: '<span>{{ message }}</span>'
})

//Dynamic Props
Vue.component('dynamic-child', {
  //props declaration and validation
  template: '<span>{{ messageOne }}</span>',
  props: {
   'messageOne': {
      type: Number,
      required: true,
   }
  }
})

Vue.component('sum-result', {
  template: `
    <div>
      <slot>
        <p>Display me</p>
      </slot>
      <button @click="summation">Sum</button>
    </div>
  `,
  props: ['num1','num2'],
})

// Local registration of a custom directive
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

// Global registration of a directive: custom-directive
Vue.directive('custom-directive', {
  bind: function (el, binding) {
    var d = JSON.stringify
    el.innerHTML =
      'name: '       + d(binding.name) + '<br>' +
      'value: '      + d(binding.value) + '<br>' +
      'expression: ' + d(binding.expression) + '<br>' +
      'argument: '   + d(binding.arg) + '<br>' +
      'modifiers: '  + d(binding.modifiers) + '<br>' 
  }
})

// The plugin is loaded here.
Vue.use(PluginOne)

new Vue({
  el: '#app',
  // render: h => h(App),

  data() {
    return {
      message: 'You are accessing this page on: '+ new Date(),
      welcome: 'This is Diannes tutorial point. The best worldwide, hover the mouse over this to see more.',
      h3: 'Learning Vue.js',
      p: 'Its Wednesday: welcome to Diannes tutorial point.',
      messageOne: 'Hello there, this is a message from the parent',

      //pudding
      fruit1: '',
      fruit2: '',
      pudding1: '',

      //summation
      number1: 0,
      number2: 0,
      sum: 0,

      //calculator
      firstnumber: 0,
      secondnumber: 0,
      selected: '',
      answer: 0,

      //grading
      marks: 0,

      cp: 'computed properties',
      wp: 'watch properties',

      checkedNames: [],
      f: "female",
      m: "male",

      gender: true,
      cr: 'conditional rendering',
      lr: 'List rendering',
      fib: 'Form input bindings',

      languages: [
        { name: 'Node.js', id: 1 },
        { name: 'Vue.js', id: 2  },
        { name: 'Webpack', id: 3  },
      ],

    	activeColor: 'violet',
    	fontSize: 20,
      isClass:true,
    }
  },

// A mixin to display option merging
  mixins: [firstMixin],
  created: function () {
    alert('Experience being mixed by mixins @dianne')
  },

  computed: {
    pudding: function () {
      return this.fruit1 + ' ' + this.fruit2
    },
    grade: function(){
      if (this.marks > 100){
        return 'Enter marks below 100'
      }else if( this.marks >= 70 && this.marks <= 100 ){
        return 'A'
      }else if( this.marks >=60 ){
        return 'B'
      }else if( this.marks >=50 ){
        return 'C'
      }else if( this.marks >= 40 ){
        return 'D'
      }else if( this.marks >= 0 ){
        return 'E'
      }else{
        return 'Invalid Mark Input'
      }
    },
    calculator: function(){
      if (this.selected == 'Addition'){
        this.answer = parseInt(this.firstnumber) + parseInt(this.secondnumber)
        return this.answer
      }else if (this.selected == 'Subtraction'){
        this.answer = parseInt(this.firstnumber) - parseInt(this.secondnumber)
        return this.answer
      }else if (this.selected == 'Division'){
        this.answer = parseInt(this.firstnumber) / parseInt(this.secondnumber)
        return this.answer
      }else if (this.selected == 'Multiplication'){
        this.answer = parseInt(this.firstnumber) * parseInt(this.secondnumber)
        return this.answer
      }else{
        return 'Calculating...'
      }
    }
  },
  watch: {
    fruit1: function (val) {
      this.pudding1 = val + ' ' + this.fruit2
    },
    fruit2: function (val) {
      this.pudding1 = this.fruit1 + ' ' + val
    }
  },

  methods: {
    reverseMessage: function () {
      this.p = this.p.split('').reverse().join('')
    },
    summation: function(e){
      this.sum = parseInt(this.number1) + parseInt(this.number2)
      //preventDefault prevents the page from blinking or the default click of a button to link to another page or submit
      e.preventDefault()
    },
  },

})




