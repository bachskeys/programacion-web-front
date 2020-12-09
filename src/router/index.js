import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Peliculas from '../views/Peliculas.vue'
import Agregar from "../views/Agregar.vue"
import Editar from "../views/Editar.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/peliculas',
    name: 'peliculas',
    component: Peliculas
  },
  {
    path:"/Agregar",
    name:"Agregar",
    component:Agregar
  },
  {
    path:"/editar/:id",
    name:"Editar",
    component:Editar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router