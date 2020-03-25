<template>
    <div class="chat container">
       <h2 class="center black-text">Spiderxm-ChatBox</h2>
       <div class="card">
           <div class="card-content">
               <ul class="messages">
                   <!-- <li v-for="(message,index) in messages" v-bind:key="index">  -->
                       <li>
                       <span class="black-text">Name</span> 
                       <span class="grey-text text-darken-3">messages</span>
                       <span class="grey-text time">time</span>
                       </li>
               </ul>
           </div>
           <div class="card-action">
               <NewMessage :name="name"/>
           </div>
       </div>
    </div>
</template>
<script>
import NewMessage from '@/components/Newmessage'
// import db from '@/firebase/init'
export default {
    name:'Chat',
    props : ['name'],
    data(){
        return {
            messages 
        }
    },
    components:{
        NewMessage
    },
    methods:{

    },
    created(){
    }
}
</script>
<style >
.chat h2{
    font-size : 2.6em;
    margin-bottom: 40px;
}
.chat span{
    font-size: 1.4em;
    
}
.chat .time{
    display: block;
    font-size:1.2em;

}
</style>