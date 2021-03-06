import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import AdminUser from '../views/AdminUser.vue'
import Supplier from  '../views/Supplier.vue'
import Goodswarehousing from '../views/Goodswarehousing.vue'
import Warehousing from '../views/Warehousing.vue'
import Staff from '../views/Staff.vue'
import Punchtneclock from '../views/Punchtheclock.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children:[
      {path:'/adminuser',name:'adminuser',component:AdminUser},
      {path:'/supplier',name:'supplier',component:Supplier},
      {path:'/goods',name:'goods',component:Goodswarehousing},
      {path:'/war',name:'war',component:Warehousing},
      {path:'/staff',name:'staff',component:Staff},
      {path:'/Punchtneclock',name:'Punchtneclock',component:Punchtneclock},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
