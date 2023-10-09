<script setup>
    import { ref } from 'vue'
    import router from './../router'
    const title = ref('ЗАГОЛОВОК')
    function setAuth() {
        //localStorage.setItem('isAuth', false);
        authStore.auth.length = 0
        router.push({path: '/'})
    }
    import {useCartStore} from "../stores/cart";
    const cart = useCartStore()
    import {useAuthStore} from "../stores/auth";
    const authStore = useAuthStore()
</script>

<template>
    <header>
        <button><router-link to='/'>Главная</router-link></button>
        <button><router-link to='/add'>Добавить товар</router-link></button>
        <button><router-link to='/order'>Заказать товар</router-link></button>
        <button><router-link to='/about'>О себе</router-link></button>
        <button>
            <router-link to='/cart'>
                Корзина
                <span class='badge badge-warning' id='lblCartCount'> {{ cart.cartItemsCount }} </span>
            </router-link>
        </button>

        <div style="float:right">
            <label v-if="authStore.auth[0]">Пользователь {{ authStore.auth[0].login }} </label>
            <button v-if="authStore.auth[0]" @click="setAuth">Выход</button>
            <button v-else><router-link to='/auth'>Авторизация</router-link></button>

        </div>
        <!--<h3>{{ title }}</h3>-->
    </header>
</template>

<style scoped>
    header{
        background-color: darkgrey;
        padding: 10px;
        height: 50px;
        text-align: left;
        color: #ffffff;
    }
    button{
        margin-right: 5px;
        margin-left: 5px;
    }
    .badge {
        padding-left: 9px;
        padding-right: 9px;
        -webkit-border-radius: 9px;
        -moz-border-radius: 9px;
        border-radius: 9px;
    }

    .label-warning[href],
    .badge-warning[href] {
        background-color: #c67605;
    }
    #lblCartCount {
        font-size: 12px;
        background: #ff0000;
        color: #fff;
        padding: 0 5px;
        vertical-align: top;
        margin-left: -10px;
    }
</style>
