<script setup>
    import { ref } from 'vue'
    const footer_text = ref('Copyright 2023')
</script>

<template>
    <footer>
        <p>{{ footer_text }}</p>
    </footer>
</template>

<style scoped>
    footer{
        background-color: lightcyan;
        padding: 10px;
        text-align: center;
    }
</style>
