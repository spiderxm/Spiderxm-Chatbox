<template>
    <div class="new-message">
        <form @submit.prevent="addmessage">
            <label for="new-message">New Message(enter to add)</label>
            <input type="text" name="new-message" placeholder="message" v-model="newmessage">
        </form>
    </div>
</template>
<script>
export default {
    name:'NewMessage',
    props:['name'],
    data(){
        return {
            newmessage:null,
        }
    },
    methods:{
      addmessage(){
          console.log(this.newmessage,Date.now(),this.name);
      }
    }
}
</script>