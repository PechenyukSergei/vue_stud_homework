<template>
    <div class="cart">
        <h2 id="irt">Корзина товаров</h2>
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
            <Cart-row v-for="item in cart.cart" :item="item"></Cart-row>
            <tr class="itogSum">
                <td colspan="4">Итоговая цена</td>
                <td style="text-align:center;">{{ cart.totalSum }}</td>
                <td/>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
    import CartRow from "./CartRow.vue";
    import {useCartStore} from "../stores/cart";

    const cart = useCartStore()

</script>
<style scoped>
    .cart{
        padding: 20px;
    }
    .itogSum{
        text-align: left;
        font-weight: bold;
    }
</style>
