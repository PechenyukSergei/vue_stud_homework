<script setup>
  import { ref } from 'vue'
  import json from './json/products.json'
  import header from './views/header.vue'
  import sidebar from './views/sidebar.vue'
  import content from './views/content.vue'
  import footer from './views/footer.vue'
  defineProps({
    msg: String,
  })

 // const title = ref('PFUJKJDJR')
 // const books = ref(['book1', 'book2', 'book3'])
  const products = ref(json)
  const webapp_header = ref(header)
  const webapp_sidebar = ref(sidebar)
  const webapp_content = ref(content)
  const webapp_footer = ref(footer)

  function greet() {
    return 'pizza'
  }
</script>

<template>

    <div>

        <webapp_header/>
        <div style="display: flex; flex-direction: row; height:100%;min-height:1000px;">
            <webapp_sidebar/>
            <div class="routdiv">
                <router-view></router-view>
            </div>
        <!--<router-view>
            <webapp_content/>
        </router-view>-->
        </div>
        <webapp_footer/>
    </div>
</template>



<!--<template>
    <header/>
    <main>
      <sidebar/>
      <content>
        <div>
        <h4>{{ title }}</h4>
          <p>{{ greet() }}
          </p>
          <div>
            <ul>
               <li v-for="(book, index) in books" :key="index">
                 {{ book }}
               </li>
             </ul>

<div style="border: 1px solid black" v-for="(product, index) in products" :key="index">
  <div>
      <div style="height:100%; width: 30%;" class="img_div">
          <a :href="product.image" target="_blank">
            <img :src="product.image" class="preview"/>
        </a>
      </div>
      <div class="text_div">
        Наименование {{ product.title }}<br/>
        Описание  {{product.description}} <br/>
        Категория {{ product.category }}<br/>
        Цена {{ product.price }}<br/>
      </div>
  </div>
</div>
           <ul>
              <li v-for="(product, index) in products" :key="index">
                {{ product.id }}
              </li>
            </ul>
          </div>-
        </div>
      </content>
    </main>
  <footer/>
</template> -->

<style scoped>
  .preview {
      height: 6em;
      padding: 1.5em;
      will-change: filter;
      transition: filter 300ms;
  }
  .img_div {
      height:100%;
      width: 30%;
  }
  .text_div {
  }
  .routdiv{
      width: 70%;
  }
</style>
