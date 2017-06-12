<template>
  <div>
    <h3>Login to proceed</h3>

  <form v-if="!loggedin">
    <label>Username:</label>
    <input type="text" v-model.lazy="username" required/>
    <br>

    <label>Email address:</label>
    <input type="text" required v-model.lazy="email"/>
    <br>

    <label>Password:</label>
    <input type="password" required v-model="password"/>
    <br>

    <label>Area of interest</label>
    <textarea v-model="topics"> </textarea>

    <br>
    <button v-on:click.prevent="post">Login</button>
    <!-- JWT authentication -->
    <!-- <button @click.prevent="login()" >Submit</button> -->
  </form>

  <!-- Getting the user data using the response obtained from the post -->
  <div>
    <p>Username: {{user.title}} </p>
    <p>Email: {{user.body}} </p>
    <p>Topic: {{user.userID}} </p>
  </div>

  <div v-if="loggedin">
    <h2>You're now a member @Dianne's blogs</h2>
  </div>

  </div>
</template>

<script>
  module.exports = {
    data: function(){
      return{ 
          topics: "",
          email: "",
          username: "",
          password:"",
          user: {},
    
        loggedin: false,

        login1: {
          email: 'dianneprinsescah@gmail.com',
          password: 'password'
        }
      }
    },
    methods: {
      // API requests: the post method
      post: function(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts',{
          title: this.topics,
          userID: this.username,
          body: this.email
        }).then(function(response){
          this.user = response.data;
          console.log(this.user);
          this.loggedin = true;
        }); 
      },

      // JWT Authentication
      //  login: function(){
      //   email = this.login1.email
      //   password = this.login1.password
      //   this.$auth.login({email, password}).then(function () {

      //   console.log('successfully logged in');
      //   })
      // }
  }
}
</script>

<style scoped>
  div{
    font-style: italic;
    font-size: 13px;
    background-color: linen;
    padding: 10px;
  }
  label{
    display: block;
    margin: 20px, 0, 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 90%;
    padding: 8px;
  }
  input[type="password"]{
    display: block;
    width: 90%;
    padding: 8px;
  }
  h3{
    margin-top: 10px;
  }
  button{
    display: block;
    margin: 20px, 0, 10px;
    padding: 8px;
    display: block;
    width: 10%;
  }
</style>