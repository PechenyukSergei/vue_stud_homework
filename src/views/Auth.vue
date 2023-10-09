<script>
    import { ref } from 'vue'
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import router from './../router'
    import { mapStores } from 'pinia'
    import {useAuthStore} from "../stores/auth";

    export default {
        name: 'auth',
        data() {
            return {
                auth: {
                    login: '',
                    password: '',
                },
            }
        },
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        computed: {
            // note we are not passing an array, just one store after the other
            // each store will be accessible as its id + 'Store'
            ...mapStores(useAuthStore)
        },
        methods: {
            validateReq(value) {
                // Если поле не заполнено
                if (!value) {
                    return 'Поле обязательно для заполнения';
                }
                return true;
            },
            submitForm() {
                //localStorage.setItem('isAuth', true);
                //if (authStore.auth.length != 0){
                //    alert('Пользователь уже авторизован');
                //} else {
                this.authStore.logIn( this.auth.login )
              //  useAuthStore.logIn( {"login":'12' })
                    router.push({path: 'add'})
               // }
            },
        },
    }

</script>

<template>
    <div class="root">
        <Form @submit="submitForm">
            <h2>Форма авторизации</h2>
            <p>
                <Field id="login" class='solo' name="login" type="text" v-model="auth.login" placeholder="Введите логин" :rules="validateReq"/>
                <ErrorMessage style="color: red" name="login" />
            </p>
            <p>
                <Field class='solo' name="password" type="text" v-model="auth.password" placeholder="Введите пароль" :rules="validateReq"/>
                <ErrorMessage style="color: red" name="password" />
            </p>
            <button  @keyup.enter="submitForm">Отправить</button>
        </Form>
        <button id="but" @click="authStore.logIn(auth.login)">Отправить2</button>
    </div>
</template>

<style scoped>
    .root {
        width: 600px;
        margin: 0 auto;
        background-color: #fff;
        padding: 30px;
        margin-top: 100px;
        border-radius: 20px;
    }

    .solo {
        border: none;
        outline: none;
        border-bottom: 1px solid #ddd;
        font-size: 1em;
        padding: 5px 0;
        margin: 10px 0 5px 0;
        width: 100%;
    }


    button {
        background-color: #3498db;
        padding: 10px 20px;
        margin-top: 10px;
        border: none;
        color: white;
    }
</style>