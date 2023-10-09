<!--<template>
    <div>
        <ul>
            <li v-for="product in getCatalog" :key="product.id">

                <div >
                    <a :href="product.image" target="_blank">
                        <img :src="product.image" class="preview"/>
                    </a>
                </div>
                <p class="prodTitl">{{product.title}}</p>
                <p class="prodPrice">Цена: {{product.price}} &euro; </p>
                <p>
                    <button class="btn btn-primary" @click="addToCart(product.id, 1)">
                        В корзину
                    </button>
                </p>
            </li>
        </ul>
    </div>
</template>


<script setup>
    import { ref, onMounted, computed } from "vue";
    import { useCatalogStore } from "../store/catalog";
    //import { useCartStore } from "../store/cart";
    //const cart = useCartStore();
    const store = useCatalogStore();
    const getCatalog = computed(() => {
        return store.getCatalog;
    });
    const users = computed(() => {
        return store.catalog;
    });
    onMounted(() => {
        store.fetchCatalog();
    });
</script>
<style scoped>
    ul{
        display: flex;
        margin: 20px;
        padding: 10px;
        box-sizing: border-box;
        flex-wrap: wrap;
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
    .preview {
        height: 6em;
        padding: 1.5em;
    }
    .prodTitl{
        text-font: 14px;
        font-weight: bold;
    }
</style> -->

<template>
    <head>
        <link href="https://use.fontawesome.com/releases/v5.0.1/css/all.css" rel="stylesheet">
    </head>
    <div class="catalog">
        <ul>
            <Catalog-row v-for="item in catalogStore.catalog" :item="item"></Catalog-row>
        </ul>
    </div>
</template>

<script setup>
    import CatalogRow from "./CatalogRow.vue";

    import {onMounted, ref} from "vue";
    import {useCatalogStore} from "../stores/catalog";
    import { getData } from './../services/getProducts.js'
   // import {useAuthStore} from "../stores/auth";
   // const authStore = useAuthStore()
    const catalogStore = useCatalogStore()


    onMounted(() => {
        catalogStore.catalog.length = 0
       // authStore.auth.push( {"login":'12' })
        getData((res) => {
            res.data.forEach((el) => catalogStore.catalog.push(el));
        },(err) => {
            alert(err);
        });
    })
</script>
<style scoped>
    ul{
        display: flex;
        margin: 20px;
        padding: 10px;
        box-sizing: border-box;
        flex-wrap: wrap;
    }
</style>