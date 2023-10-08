/*import {createStore} from 'vuex'
import axios from 'axios';
const url="https://fakestoreapi.com/products"
export default createStore({
    state:{
        user: { name: 'John Doe', email: 'fake@email.com', username: 'jd123'},
        posts: [],
        someString: 'etc'
    },
    getters:{},
    mutations: {},
    actions:{}
})*/
import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
Vue.use(Vuex)

// Экспортируем наружу
export default new Vuex.Store({
    state: {
        //
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        auth
    }
})