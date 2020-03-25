<template>
    <div class="chat container">
       <h2 class="center black-text">Spiderxm-ChatBox</h2>
       <div class="card">
           <div class="card-content">
               <ul class="messages" v-for="message in messages" :key="message.id">
                       <li>
                       <span class="black-text">{{message.name}}</span> 
                       <span class="grey-text text-darken-3">{{message.content}}</span>
                       <br>
                       <span class="grey-text time">{{message.timestamp}}</span>
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
import db from '@/firebase/init'
export default {
    name:'Chat',
    props : ['name'],
    data(){
        return { 
            messages:[]
               }
    },
    components:{
        NewMessage
    },
    methods:{

    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp');
        ref.onSnapshot(snapshot => {    //taking only the changes
           snapshot.docChanges().forEach(change => {
               if(change.type == 'added'){
                 let doc = change.doc
                 this.messages.push({
                     id:doc.id,
                     name:doc.data().name,
                     content:doc.data().content,
                     timestamp:doc.data().timestamp,
                 })
               }
           })
        })   //on changes
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