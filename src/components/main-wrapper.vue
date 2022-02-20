<template>
   <div class="main-wrapper">
      <p>{{titel}}</p>
      <catalog />
      <cart 
      v-if="CART.length"
      :cartData="CART"
      />
   </div>
</template>

<script>
import catalog from './catalog.vue'
import cart from './cart'
import{mapGetters} from 'vuex'

export default {
   name: 'main-wrapper',
   components: {
      catalog,
      cart,
   },
   props:{},
   data(){
      return {
         titel: 'Main wrapper'
      }
   },
   computed: {
      ...mapGetters([
         'CART'
      ])
   },
   methods: {},
   watch: {},
   mounted: console.log('Hello i main wrapper')
}
</script>

<style>
.main-wrapper {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   max-width: 1280;
   margin: 0 auto;
   font-size: 20px;
}

p {
   margin: 4px;
}
</style>