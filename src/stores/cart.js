/*import {defineStore} from "pinia";
import { ref, onMounted, computed } from "vue";
import {useCatalogStore} from "../store/catalog";
//const catalog = useCatalogStore()
export const useCartStore = defineStore('cart', {
    const catalog = useCatalogStore(),
    state: () => ({
        cart: [],
    }),
    getters: {
        getCart(state){
            return state.cart
        }
    },
    actions: {
    },
})*/
import {defineStore} from "pinia";
import {computed, reactive} from "vue";
import {useCatalogStore} from "../stores/catalog";
export const useCartStore = defineStore('cart', () => {
    const cart = reactive([])

    const catalog = useCatalogStore()

    function addToCart(id, count) {
        const existingItem = findById(id)
        if (!existingItem)
            cart.push({ id, count })
        else
            existingItem.count += count
    }

    function findById(id) {
        return cart.find((i) => i.id === id)
    }

    function setCount(id, count) {
        const item = findById(id)

        if (item) {
            if (count !== 0)
                item.count = count
            else
                cart.splice(cart.findIndex((i) => i.id === id), 1)
        }
    }

    const cartItemsCount = computed(() => cart.reduce(
        (cartItemsCount, item) => {
            return cartItemsCount + item.count
        }, 0))
    const totalSum = computed(() => cart.reduce(
        (totalSum, item) => {
            return +(totalSum + item.count * catalog.findById(item.id).price).toFixed(2)
        }, 0))

    return { cart, addToCart, findById, setCount, cartItemsCount, totalSum }
})