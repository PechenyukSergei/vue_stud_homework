import { createRouter, createWebHistory } from 'vue-router';
import Home from './../views/Home.vue';
import About from './../views/About.vue';
import Products from './../views/content.vue';
import AddProduct from './../views/AddProduct.vue';
import Order from './../views/Order.vue';
import Auth from './../views/Auth.vue';
//import Cart from './../views/ProdCart.vue';
import Catalog from './../views/Catalog.vue';
import Cart from './../views/Cart.vue';

const routes = [
    //{path: '/', name: 'Home', component: Products},
    {path: '/', name: 'Home', component: Catalog},
    {path: '/add', name: 'AddProduct', component: AddProduct},
    {path: '/order', name: 'Order', component: Order},
    {path: '/auth', name: 'Auth', component: Auth},
    {path: '/about', name: 'About', component: About},
    {path: '/cart', name: 'Cart', component: Cart},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from) => {
    if ((to.name == 'AddProduct') && (localStorage.getItem('isAuth')!='true')){
        alert('Данный пункт меню доступен только авторизованным пользователям');
        return { name: 'Auth' }
    }
})

export default router