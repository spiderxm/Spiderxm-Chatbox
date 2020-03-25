<template>
    <div class="chat container">
      <h2>Chat  {{ this.name }}</h2>

    </div>
</template>
<script>
// import db from '@/firebase/init'
export default {
    name:'Chat',
    props : ['name'],
    data(){
        return {

        }
    },
    methods:{

    },
    created(){
        console.log(this.name);
    }
}
</script>
<style >

</style>