<script>
    import { ref } from 'vue'
    import json from './../json/products.json'
    import axios from 'axios'

   // const products = ref(json)
    //const searchTitle = ref('')
    const url="https://fakestoreapi.com/products"

   /* function aaa(prodTitl, searchTitl) {
        if (searchTitl=='' || prodTitl.includes(searchTitl))
            return true;
    }*/
    function filteredList() {
        return products.filter((product) =>
            product.toLowerCase().includes(searchTitle.value.toLowerCase())
        );
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
                visible: true
            }
        },
        created(){
            axios.get(url)
                .then((response) => {
                    this.products = response.data
                })
        },
        computed: {

            filteredList: function () {

                var products = this.products;
                var filter = this.filter;
                //var searchTitle = this.searchTitle;
                if ((!filter.filtTitle) && (!filter.filtPriceFrom) && (!filter.filtPriceTo)){
                    return products;
                }
               /* if(!searchTitle){
                    return products;
                }*/

                var searchString = filter.filtTitle.trim().toLowerCase();

                products = products.filter(function(item){
                    if (((!filter.filtTitle) || ((filter.filtTitle) && (item.title.toLowerCase().indexOf(searchString) !== -1)))
                    && ((!filter.filtPriceFrom) || ((filter.filtPriceFrom) && (item.price >= filter.filtPriceFrom)))
                    && ((!filter.filtPriceTo) || ((filter.filtPriceTo) && (item.price <= filter.filtPriceTo)))){
                        return item;
                    }
                })
                return products;
            }
        },
        methods: {
            NumbersOnly(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            }
        }
    }
</script>
<template>
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
            <li v-for="(product, index) in filteredList" :key="index">

                <div >
                    <a :href="product.image" target="_blank">
                        <img :src="product.image" class="preview"/>
                    </a>
                </div>
                <p class="prodTitl">{{product.title}}</p>
                <p class="prodPrice">Цена: {{product.price}} &euro; </p>
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