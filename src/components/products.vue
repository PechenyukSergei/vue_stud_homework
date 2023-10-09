<script>
    import { ref } from 'vue'
    //import json from './../json/products.json'
   // import axios from 'axios'
    import { getData } from './../services/getProducts.js'
   // const products = ref(json)
    //const searchTitle = ref('')
    //const url="https://fakestoreapi.com/products"

   /* function aaa(prodTitl, searchTitl) {
        if (searchTitl=='' || prodTitl.includes(searchTitl))
            return true;
    }*/
    /*function filteredList() {
        return products.filter((product) =>
            product.toLowerCase().includes(searchTitle.value.toLowerCase())
        );
    }*/



    function checkIdinObj(localStorageObject, prod){
        for (let key in localStorageObject) {
            if (localStorageObject[key].prodId == prod.id){
                localStorageObject[key].Count += 1;
                localStorage.setItem("cart", JSON.stringify(localStorageObject));
                return true
            }
        }
        return false
    }

    export default {
        name: 'products',
        data() {
            return {
                products: [],
                filter: {
                    filtTitle: '',
                    filtPriceFrom: '',
                    filtPriceTo: ''
                },
                //searchTitle: '',
                visible: true,
                msg: '',
                inputMsg: ''
            }
        },
        created(){
            getData((res) => {
                this.products = res.data;
            },(err) => {
                alert(err);
            });
        },
        computed: {

            filteredList () {
                let products = this.products;
                let filter = this.filter;
                let searchString = filter.filtTitle.trim().toLowerCase();
                return products
                    .filter((item) => item.title.toLowerCase().indexOf(searchString) !== -1)
                    .filter((item) => ((!filter.filtPriceFrom) || item.price >= filter.filtPriceFrom))
                    .filter((item) => ((!filter.filtPriceTo) || item.price <= filter.filtPriceTo));
            },
        },
        methods: {
            NumbersOnly(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();
                    ;
                } else {
                    return true;
                }
            },
            addToCart(prod) {
                if (!localStorage.getItem("cart")) {
                    localStorage.setItem("cart", JSON.stringify([{'prodId': prod.id, 'title': prod.title, 'price': prod.price, 'Count': 1}]));
                } else {
                    let localStorageObject = JSON.parse(localStorage.getItem('cart'));


                    if (!(checkIdinObj(localStorageObject, prod))) {
                        localStorageObject.push({'prodId': prod.id, 'title': prod.title, 'price': prod.price, 'Count': 1});
                        localStorage.setItem("cart", JSON.stringify(localStorageObject));
                    }
                }
            },
        }
    }
</script>
<template>
    <h1>{{msg}}</h1>
    <input type="text" v-model="inputMsg" placeholder="message"/>
    <button @click="msg=inputMsg">Submit</button>
    <div>
        <table>
            <tr>
                <td>Наименование</td>
                <td><input v-model="filter.filtTitle" placeholder="Поиск по наименованию"/></td>
            </tr>
            <tr>
                <td style="text-align:right">Цена от</td>
                <td><input style="width:15%" v-model="filter.filtPriceFrom" v-on:keypress="NumbersOnly"/> до <input style="width:15%" v-model="filter.filtPriceTo" v-on:keypress="NumbersOnly"/></td>
            </tr>
        </table>
    </div>
    <div>
        <ul>
            <li v-for="(product, id) in filteredList" :key="product.id">

                <div >
                    <a :href="product.image" target="_blank">
                        <img :src="product.image" class="preview"/>
                    </a>
                </div>
                <p class="prodTitl">{{product.title}}</p>
                <p class="prodPrice">Цена: {{product.price}} &euro; </p>
                <p>
                    <button class="btn btn-primary" @click="addToCart(product)">
                    В корзину
                    </button>
                </p>
            </li>
        </ul>
    </div>
</template>



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
</style>