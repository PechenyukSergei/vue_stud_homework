import {defineStore} from "pinia";
import {computed, reactive} from "vue";
export const useAuthStore = defineStore('auth', () => {
    const auth = reactive([])

    function logIn(login) {
        let d = new Date().toString();
        auth.push( {"login": login, "date": d } )
        return true
    }
    function logOut() {
        auth.length = 0;
        return true

    }
    return { auth, logIn, logOut }
})