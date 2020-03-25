import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      beforeEnter: (to,from,next) => {  //routeguard
         if(to.params.name)
          next()        //natural where it should go by default
         else 
          next({name: 'Welcome'})    //to pass to next route which it should for abnormality
      }
    }
  ]
})
