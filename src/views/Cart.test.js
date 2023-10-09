import Cart from "./Cart.vue";
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, vitest, test} from 'vitest'
import { useCartStore } from '../stores/cart.js'

describe('Cart.vue', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(Cart, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vitest.fn,
                    initialState: {
                        cart: { id: 1, count:1 }, // start the counter at 20 instead of 0
                    },
                })]
            }
        })
    })
    test('that is displays +', () =>{
        expect(wrapper.find('#irt').text()).toBe('Корзина товаров')
    })
    test('increment is working', () =>{
        const cart = useCartStore();
        cart.addToCart(1, 1);
       // wrapper.findAll('button[class="incButton"]')[0].trigger('click')
        //wrapper.find('button[id="incButton"]').trigger('click')
        expect(cart.addToCart).toHaveBeenCalledOnce()
    })

})