import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, test } from "vitest"
import { useCartStore } from '../stores/cart.js'
describe('Cart Store', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })

    test('that the counter starts at zero', () =>{
        const cart =  useCartStore()
        expect(cart.cartItemsCount).toBe(0)
    })
    test('that the counter inc by 1', () =>{
        const cart =  useCartStore()
        cart.addToCart(1, 1)
        expect(cart.cartItemsCount).toBe(1)
    })
})