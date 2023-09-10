<script>
    import { ref } from 'vue'

    export default {
        name: "cart",
        data() {
            return {
                cart: [],
            };
        },
        methods: {
            removeFromCart(prod) {
                let localStorageObject = JSON.parse(localStorage.getItem('cart'));
                for (let key in localStorageObject) {
                    if (localStorageObject[key].prodId == prod.prodId){
                        localStorageObject.splice(key, 1);
                        localStorage.setItem("cart", JSON.stringify(localStorageObject));
                    }
                }
                this.getCart();
            },
            getCart() {
                if (!localStorage.getItem("cart")) {
                    localStorage.setItem("cart", JSON.stringify([]));
                }
                this.cart = JSON.parse(localStorage.getItem("cart"));
            },
            addToCart(prod, incrim) {
                let localStorageObject = JSON.parse(localStorage.getItem('cart'));
                for (let key in localStorageObject) {
                    if (localStorageObject[key].prodId == prod.prodId){
                        localStorageObject[key].Count += incrim;
                        localStorage.setItem("cart", JSON.stringify(localStorageObject));
                    }
                }
                this.getCart();
            },
            removeAll() {
                delete localStorage.cart;
                this.getCart();
            }
        },
        beforeMount() {
            this.getCart();
        },
    };
</script>
<template>
    <div>
        <h1>Корзина товаров</h1>
        <table style="border: 1px solid black; width:100%; text-align:center">
            <thead>
            <tr>
                <th>ID</th>
                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
                <th>Сумма</th>
                <th>Удалить</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(c, id) of cart" :key="c.id">
                <td>{{ c.prodId }}</td>
                <td>{{ c.title }}</td>
                <td>{{ c.price }}</td>
                <td>{{ c.Count }}
                    <button @click="addToCart(c, 1)">+</button>
                    <button @click="addToCart(c, -1)" :disabled="c.Count<=1">-</button>
                </td>
                <td>{{ c.Count * c.price }}</td>
                <td>
                    <button @click="removeFromCart(c)">
                        Удалить
                    </button>
                </td>

            </tr>
            </tbody>
        </table>
        <div style="float:right"><button @click="removeAll">Очистить корзину</button></div>
    </div>
</template>
