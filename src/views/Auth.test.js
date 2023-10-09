import Auth from "./Auth.vue";
import { createTestingPinia } from '@pinia/testing'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, vitest, test} from 'vitest'
import { useAuthStore } from '../stores/auth.js'

describe('Auth.vue', () => {
    let wrapper = null;

    beforeEach(() => {
        wrapper = mount(Auth, {
            global: {
                plugins: [createTestingPinia({
                    createSpy: vitest.fn
                })]
            }
        })
    })

    test('auth is working', () =>{
        const auth = useAuthStore();
        //auth.logIn('12');
        wrapper.find('#but').trigger('click')
        expect(auth.logIn).toHaveBeenCalledOnce()
    })
})