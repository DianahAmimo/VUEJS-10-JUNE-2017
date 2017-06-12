<template>
  <div class="hello">
    <div v-html="msg"></div>
  <p> Counter: {{ $store.state.count }} times, count is {{ evenOrOdd }}. </p>
   </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'hello',
  computed: mapGetters([
    'evenOrOdd'
    ]),
  data () {
    return {
      msg: `
        <h1>British Airways tech glitch: Union blame Indian IT companies</h1>
        Once in a while, companies may experience a systems downtime in their operations. This is normally a very disappointing and frustrating moment. The company will always look for a person or a group responsible for the systems failure, or it may end up casting a blame if it becomes hard pin point the entity accountable for the systems failure. 

        <p>The British airways experienced a systems downtime recently. This led to a standstill in their business operations. Besides experiencing the standstill, the company also incurred some losses resulting from the systems downtime. The company had to get back to the developers of the system which in this case, was the Indian IT companies. The company pointed out that the halt in their business processes was as a result of disastrous computer failure that could have been avoided.</p>

        <p>When a system experiences failure at some point after implementation, it all trickles down to the developers of the system. Therefore, developers in Cytonn Technologies should borrow a leaf from this scenario and strive to their utmost ability to create programs that are flawless. This will stand out to defend them in case of future issues arising after a system has been implemented.</p>
        <p>Visit <a href="#">www.dianneprisescah.org</a> for more blogs.<p>
      `
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
    font-style: italic;
    font-size: 13px;
    background-color: linen;
    padding: 10px;
  }
  
h1, h2 {
  font-weight: normal;
  text-align: center;
  font-style: italic;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
