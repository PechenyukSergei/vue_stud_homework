<script>
    import { ref } from 'vue'
    import { Form, Field, ErrorMessage } from 'vee-validate';
    import axios from 'axios'
   /* const email = ref('')
    const fio = ref('')
    const country = ref('')
    const tel = ref('')
    const addres = ref('')
    const comment = ref('')
    const chpers = ref(true)
    const chSigns = ref([])*/
    const url="https://httpbin.org"
    export default {
        name: 'order',
        data() {
            return {
                order: {
                    email: '',
                    fio: '',
                    country: '',
                    tel: '',
                    addres: '',
                    comment: '',
                    chpers: true,
                    chSigns: [],
                },
            }
        },
        created: function () {
        },
        updated: function () {
        },
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        methods: {
            submitForm() {
                console.log(this.$data);
                axios.post(url, {data: this.$data})
                    .then(res => {
                        alert('Заказ оформлен');
                    })
                    .catch(err => {
                        alert(err);
                    });
            },
            validateEmail(value) {
                // Если поле не заполнено
                if (!value) {
                    return 'Поле обязательно для заполнения';
                }

                // Если нам не нравится то что ввели
                const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
                if (!regex.test(value)) {
                    return 'Некорректный адрес email';
                }

                // All is good
                return true;
            },
            validateReq(value) {
                // Если поле не заполнено
                if (!value) {
                    return 'Поле обязательно для заполнения';
                }
                return true;
            },
            validateReqCheckbox(value) {
                // Если поле не заполнено
                if (value) {
                    return 'Поле обязательно для заполнения';
                }
                return true;
            },
        },
    };
</script>

<template>

    <div class="root">
        <Form @submit="submitForm">
            <h2>Форма заказа(ФИО, емэйл, согласие - валидируются)</h2>
            <p>
                <Field class='solo' name="fio" type="text" placeholder="ФИО*" v-model="order.fio" :rules="validateReq"/>
                <ErrorMessage style="color: red" name="fio" />
            </p>
            <p>
                <Field class='solo' name="email" placeholder="Email*" type="email" v-model="order.email" :rules="validateEmail" />
                <ErrorMessage style="color: red" name="email" />
            </p>
            <p>
                <input class='solo' type="text" placeholder="Телефон" v-model="order.tel"/>
            </p>
            <p>
                <select class="solo" v-model="order.country">
                    <option disabled value="">Выберите страну</option>
                    <option value="Страна1">Страна1</option>
                    <option value="Страна2">Страна2</option>
                    <option value="Страна3">Страна3</option>
                    <option value="Страна4">Страна4</option>
                </select>
                <input class='solo' type="text" placeholder="Адрес" v-model="order.addres"/>
            </p>
            <p>
                <textarea class='solo' v-model="order.comment" placeholder="Комментарий"></textarea>
            </p>
            <p class="solo" >
                Согласие на обработку перс. данных* <Field type="checkbox" name="chpers" v-model="order.chpers" :rules="validateReqCheckbox" />
                <br/>
                <ErrorMessage style="color: red" name="chpers" />
            </p>
            <p> Подписаться на рассылки</p>
            <p class="solo">
                <input type="checkbox" id="sms" value="SMS" v-model="order.chSigns">
                <label for="sms">SMS</label>

                <input type="checkbox" id="email" value="EMAIL" v-model="order.chSigns">
                <label for="email">EMAIL</label>

                <input type="checkbox" id="tel" value="TEL" v-model="order.chSigns">
                <label for="tel">TEL</label>
            </p>

            <button>Отправить</button>
        </Form>
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