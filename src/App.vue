<template>
  <div>
    <div class="header">
      <app-header></app-header> 
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Login from './components/login.vue';
import Hello from './components/Hello.vue';
import First from './components/first.vue';
import Second from './components/second.vue';
import Third from './components/third.vue';
import header from './components/header.vue';

export default {
  components: {
    'login': Login,
    'hello': Hello,
    'first': First,
    'second': Second,
    'third': Third,
    'app-header': header,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content{
  margin-top: 10px;
  margin-left: 100px;
  margin-right: 100px;
  margin-bottom: 10px;
}
</style>
