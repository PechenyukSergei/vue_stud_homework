/**
* @vitest-environment happy-dom
 */
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import auth from './auth.vue'

describe('Auth Tests', () => {
    it('auth render', () => {
        const wrapper = mount(auth)
        expect(wrapper.find('input[name="login"]').exists()).toBeTruthy()
        expect(wrapper.find('input[name="password"]').exists()).toBeTruthy()
    })

    it('auth fill', async () => {
        const wrapper = mount(auth)
        const log = '12'
        const pas = '34'

        await wrapper.find('input[name="login"]').setValue(log)
        await wrapper.find('input[name="password"]').setValue(pas)
        expect(wrapper.findAll('input[name="login"]')).toHaveLength(1)
    })
})