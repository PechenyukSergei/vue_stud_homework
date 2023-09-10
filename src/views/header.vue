<script setup>
    import { ref } from 'vue'
    const title = ref('ЗАГОЛОВОК')
    function setAuth() {
        localStorage.setItem('isAuth', false);
    }
</script>

<template>
    <header>
        <button><router-link to='/'>Главная</router-link></button>
        <button><router-link to='/auth'>Авторизация</router-link></button>
        <button><router-link to='/add'>Добавить товар</router-link></button>
        <button><router-link to='/order'>Заказать товар</router-link></button>
        <button><router-link to='/about'>О себе</router-link></button>
        <button><router-link to='/cart'>Корзина</router-link></button>
        <button style="float:right" @click="setAuth">Выход</button>
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
    }
</style>
