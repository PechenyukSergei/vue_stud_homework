<script setup>
    import { ref } from 'vue'
    const side_text = ref('Место для рекламы')
</script>

<template>
    <div class="sidebar">
        <p>{{ side_text }}</p>
    </div>
</template>

<style scoped>
    .sidebar{
        background-color: lightgoldenrodyellow;
        padding: 10px;
        text-align: center;
        width: 15%;
        height: auto;

    }
</style>
