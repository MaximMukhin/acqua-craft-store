<template>
   <div class="catalog">
      <h1>Каталог</h1>
      <div class="catalog__list">
      <catalog-item
         v-for="product in PRODUCTS"
         :key="product.article"
         :product_data="product"
         @sendArticle="showChildArticle"
       />
      </div>

   </div>
</template>
<script>
import catalogItem from './catalog-item'
import{mapActions, mapGetters} from 'vuex'

export default {
   name: 'catalog',
   components: {
      catalogItem,
   },
   props: {},
   data() {
      return {

      }
   },
   computed: {
      ...mapGetters([
         'PRODUCTS'
      ]),
   },
   methods:{
      ...mapActions([
         'GET_PRODUCTS_FROM_API'
      ]),
      showChildArticle(data) {
         console.log(data)
      }
   },
   mounted() {
      this.GET_PRODUCTS_FROM_API()
   }
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