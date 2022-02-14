<template>
   <div class="catalog">
      <h1>Каталог</h1>
      <div class="catalog__list">
      <catalog-item
         v-for="product in products"
         :key="product.article"
         :product_data="product"
         @sendArticle="showChildArticle"
       />
      </div>

   </div>
</template>
<script>
import catalogItem from './catalog-item'

export default {
   name: 'catalog',
   components: {
      catalogItem,
   },
   props: {},
   data() {
      return {
  products: [
    {
      image: "Bella-T01-90.jpg",
      name: "Bella-T01-90",
      price: 42000,
      article: "Bella-T01-90",
      available: true,
      category: "Мужские"
    },
    {
      image: "Natali-T01-90.jpg",
      name: "Natali-T01-90",
      price: 40000,
      article: "Natali-T01-90",
      available: true,
      category: "Женские"
    },
    {
      image: "Sofia-T01-90.jpg",
      name: "Sofia-T01-90",
      price: 38000,
      article: "Sofia-T01-90",
      available: false,
      category: "Женские"
    },
    {
      image: "Bella-T01-100.jpg",
      name: "Bella-T01-100",
      price: 52000,
      article: "Bella-T01-100",
      available: true,
      category: "Мужские"
    },
    {
      image: "Bella-T01-100.jpg",
      name: "Natali-T01-100",
      price: 50000,
      article: "Natali-T01-100",
      available: false,
      category: "Женские"
    },
    {
      image: "Bella-T01-100.jpg",
      name: "Sofia-T01-100",
      price: 48000,
      article: "Sofia-T01-100",
      available: true,
      category: "Женские"
    }
  ],

      }
   },
   computed: {},
   methods:{
      showChildArticle(data) {
         console.log(data)
      }
   },
}
</script>

<style>
.catalog {
   font-size: 20px;
   font-weight: 900;
}
.catalog__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}
</style>