<script>
    import { ref } from 'vue'
    import { Form, Field, ErrorMessage } from 'vee-validate';
    export default {
        name: 'addProd',
        data() {
            return {
                addProd: {
                    prodTitle: '',
                    prodDiscr: '',
                    prodPrice: '',
                    prodCat: '',
                },
            }
        },
        components: {
            Form,
            Field,
            ErrorMessage,
        },
        methods: {
            NumbersOnly(evt) {
                evt = (evt) ? evt : window.event;
                var charCode = (evt.which) ? evt.which : evt.keyCode;
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault();;
                } else {
                    return true;
                }
            },
            validateReq(value) {
                // Если поле не заполнено
                if (!value) {
                    return 'Поле обязательно для заполнения';
                }
                return true;
            },
            validatePrice(value) {
                // Если поле не заполнено
                if (!value) {
                    return 'Поле обязательно для заполнения и должно содержать только цифры';
                }
                if (value<0){
                    return 'Цена не должна быть отрицательной';
                }
                return true;
            },
            submitForm() {
                alert('Товар добавлен (нет)');
            },
        },
    }

</script>

<template>
    <div class="root">
        <Form @submit="submitForm">
            <h2>Добавить товар</h2>
            <p>
                <Field class='solo' name="prodTitle" type="text" v-model="addProd.prodTitle" placeholder="Введите наименование товара" :rules="validateReq"/>
                <ErrorMessage style="color: red" name="prodTitle" />
            </p>
            <p>
                <Field class='solo' name="prodDiscr" type="text" v-model="addProd.prodDiscr" placeholder="Введите подробное описание товара" :rules="validateReq"/>
                <ErrorMessage style="color: red" name="prodDiscr" />
            </p>
            <p>
                <Field class='solo' name="prodCat" v-model="addProd.prodCat" :rules="validateReq" as="select">
                    <option disabled value="">Выберите категорию</option>
                    <option value="men's clothing">men's clothing</option>
                    <option value="jewelery">jewelery</option>
                    <option value="electronics">electronics</option>
                    <option value="women's clothing">women's clothing</option>
                </Field>
                <ErrorMessage style="color: red" name="prodCat" />
            </p>
            <p>
                <Field class='solo' name="prodPrice" v-model="addProd.prodPrice" type="number" placeholder="Введите цену товара" :rules="validatePrice"/>
                <ErrorMessage style="color: red" name="prodPrice" />
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