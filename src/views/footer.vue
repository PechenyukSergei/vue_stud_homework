<script setup>
    import { ref } from 'vue'
    const footer_text = ref('Copyright 2023')
    import {useAuthStore} from "../stores/auth";
    const authStore = useAuthStore()
</script>

<template>
    <footer>
        <p>
            <label v-if="authStore.auth[0]">Время авторизации {{ authStore.auth[0].date }}</label>
        </p>
    </footer>
</template>

<style scoped>
    footer{
        background-color: lightcyan;
        padding: 10px;
        text-align: center;
    }
</style>
