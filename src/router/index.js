import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MakananHome from '@/views/Makanan/Home.vue'
import MakananTambah from '@/views/Makanan/Tambah.vue'
import MakananEdit from '@/views/Makanan/Edit.vue'
import ApiHome from '@/views/QuotesAPI/Home.vue'
import ApiCorona from '@/views/KawalCorona/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/makanan/home',
    name: 'MakananHome',
    component: MakananHome
  },
  {
    path: '/makanan/tambah',
    name: 'MakananTambah',
    component: MakananTambah
  },
  {
    path: '/makanan/edit',
    name: 'MakananEdit',
    component: MakananEdit
  },
  {
    path: '/api/home',
    name: 'ApiHome',
    component: ApiHome
  },
  {
    path: '/apicorona/home',
    name: 'ApiCorona',
    component: ApiCorona
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
