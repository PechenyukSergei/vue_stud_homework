import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home.vue';
import About from './../views/About.vue';
import Products from './../views/content.vue';
import AddProduct from './../views/AddProduct.vue';
import Order from './../views/Order.vue';

const routes = [
    {path: '/', name: 'Home', component: Products},
    {path: '/about', name: 'About', component: About},
    {path: '/add', name: 'AddProduct', component: AddProduct},
    {path: '/order', name: 'Order', component: Order}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router