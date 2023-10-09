/**
* @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import products from './products.vue'

describe('Products Tests', () => {
    it('should render', () => {
        const wrapper = mount(products)
        //has ul
        expect(wrapper.find('ul').exists()).toBeTruthy()
        //has input
        expect(wrapper.find('input[placeholder="Поиск по наименованию"]').exists()).toBeTruthy()
    })

    it('should change', async () => {
        const wrapper = mount(products)
        await wrapper.find('input[type="text"]').setValue('123')
        await wrapper.find('button').trigger('click')
        expect(wrapper.find('h1').text()).toEqual('123')

    })
})