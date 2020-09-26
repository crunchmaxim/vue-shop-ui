import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Adress from '../views/Adress.vue'
import Delivery from '../views/Delivery.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/products/:productType",
    name: "Products",
    component: Products
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/adress",
    name: "Adress",
    component: Adress
  },
  {
    path: "/delivery",
    name: "Delivery",
    component: Delivery
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
