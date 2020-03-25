<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="black-text">
          WELCOME
        </h2>
        <form  @submit.prevent="enterChat">
          <label for="name">Enter your name: </label>
          <input type="text" v-model="name" name="name">
          <p class="red-text" v-if="checker">{{checker}}</p>
          <button class="btn black">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      msg : 'Welcome to Your Vue.js App',
      name :  null,
      checker : null
    }
  },
  methods:{
    enterChat(){
      if(this.name){
      console.log(this.name);
      this.$router.push({name : 'Chat',params: { name: this.name }})
    }
    else{
      this.checker = 'Please enter your name'
    }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome{
  max-width: 400px;
  margin-top: 100px;

}
.welcome h2{
  font-size:3em;
}
.welcome button{
  margin: 30px auto;
}
</style>
