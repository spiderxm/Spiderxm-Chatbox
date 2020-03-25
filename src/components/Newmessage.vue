<template>
    <div class="new-message">
        <form @submit.prevent="addmessage">
            <label for="new-message">New Message (enter to add)</label>
            <input type="text" name="new-message" placeholder="message" v-model="newmessage">
             <p v-if="feedback" class="red-text">{{feedback}}</p>        
        </form>
    </div>
</template>
<script>
import db from '@/firebase/init'
export default {

    name:'NewMessage',
    props:['name'],
    data(){
        return {
            newmessage:null,
            feedback:null
        }
    },
    methods:{
      addmessage(){
          if(this.newmessage){
              console.log("abba");
           db.collection('messages').add({
               content: this.newmessage,
               name:this.name,
               timestamp: Date.now()
           }).then(() => 
           console.log("added")

           ).catch(err=>console.log(err))
          
          this.newmessage = null
          this.feedback = null
          }
          else{
              this.feedback="You must enter something"
          }
      }
    }
}
</script>