<template>
    <li>
        <div >
            <a :href="item.image" target="_blank">
                <img :src="item.image" class="preview"/>
            </a>
        </div>
        <p class="prodTitl">{{item.title}}</p>
        <p class="prodPrice">Цена: {{item.price}} &euro; </p>
        <p>
            <button class="btn btn-primary" @click="addToCart">
                В корзину
            </button>
            <i class="fa" style="font-size:24px">&#xf07a;</i>
            <span class='badge badge-warning' id='lblCartCount'> {{ countInCart }} </span>

        </p>

    </li>
</template>

<script setup>
    import {computed, ref} from "vue";
    import {useCartStore} from "../stores/cart";

    const cart = useCartStore()

    const props = defineProps(['item'])

    const count = ref(0)
    const countInCart = computed(() => cart.findById(props.item.id)?.count ?? 0)

    function addToCart() {
        cart.addToCart(props.item.id, 1)
    }
</script>
<style scoped>
    .preview {
        height: 6em;
        padding: 1.5em;
    }
    .prodTitl{
        text-font: 14px;
        font-weight: bold;
    }
    li{
        list-style: none;
        padding: 20px;
        margin: 10px;
        text-align: center;
        border: 1px solid #229966;
        flex-grow: 1;
        flex-basis: 200px;
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