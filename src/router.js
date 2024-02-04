import {createRouter, createWebHistory} from 'vue-router';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachesDetail from './pages/coaches/CoachDetail.vue'
import CoachRegistration from './pages/coaches/CoachRegistration.vue'
import ContactCoach from './pages/requests/ContactCoach.vue'
import RequestRecieved from './pages/requests/RequestRecieved.vue'
import NotFound from './pages/NotFound.vue'




const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/' , redirect:'/coaches' },
        {path:'/coaches' ,component:CoachesList },
        {path:'/coaches/:id' ,component:CoachesDetail , children:[
          {path:'contact' ,component:ContactCoach }
        ] },
        {path:'/register' ,component:CoachRegistration },
        {path:'/requests' ,component:RequestRecieved },
        {path:'/:notfound(.*)' ,component:NotFound }
    ]
})

export default router