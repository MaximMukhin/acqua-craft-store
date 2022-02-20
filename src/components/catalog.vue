<template>
   <div class="catalog">
      <h1>Каталог</h1>
      <div class="catalog__list">
      <catalog-item
         v-for="product in PRODUCTS"
         :key="product.article"
         :productData="product"
         @addToCart="addToCart"
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
         'PRODUCTS',
      ]),
   },
   methods:{
      ...mapActions([
         'GET_PRODUCTS_FROM_API',
         'ADD_TO_CART',
      ]),
      addToCart(data) {
         this.ADD_TO_CART(data)
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

h1 {
   margin: 0;
}
.catalog__list {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
}
</style>