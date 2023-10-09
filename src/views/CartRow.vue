<template>
    <tr>
        <td>{{ item.id }}</td>
        <td>{{ catalogItem.title }}</td>
        <td>{{ catalogItem.price }}</td>
        <td>{{ countInCart }}
            <button @click="addToCart(1)">+</button>
            <button @click="addToCart(-1)" :disabled="countInCart<=1">-</button>
        </td>
        <td>{{ sum }}</td>
        <td>
            <button class="btn btn-danger" @click="cart.setCount(props.item.id, 0)">
                Удалить
            </button>
        </td>
    </tr>
</template>

<script setup>
    import {computed, ref } from "vue";
    import {useCatalogStore} from "../stores/catalog";
    import {useCartStore} from "../stores/cart";
    import {storeToRefs} from "pinia";

    const catalog = useCatalogStore()
    const cart = useCartStore()

    const props = defineProps(['item'])

    const catalogItem = catalog.findById(props.item.id)

    const count = ref(props.item.count)

    const sum = computed(() => props.item.count * catalogItem.price)
    const countInCart = computed(() => cart.findById(props.item.id)?.count ?? 0)

    function setCount() {
        cart.setCount(props.item.id, count.value)
    }
    function addToCart(val) {
        cart.addToCart(props.item.id, val)
    }
</script>