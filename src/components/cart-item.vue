<template>
  <div class="cart-item">
     <img class="cart-item__image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
     <div class="cart-item__info">
        <p>{{cart_item_data.name}}</p>
        <p>{{cart_item_data.price}}</p>
        <p>{{cart_item_data.article}}</p>
     </div>
     <div>{{banana}}</div>
     <div class="cart-item__quantity">
        <p>Количество</p>
<!--         {{cart_item_data.quantity}} -->
        </div>
     <button class="cart-item__delete-btn">Delete</button>
  </div>
</template>

<script>
export default {
   name: 'cart-item',
   props: {
      banana: {
         type: String,
         default: '...',
      },
      cart_item_data: {
         type: Object,
         default() {
            return {}
         }
      }
   },
   data() {
      return {}
   },
   computed: {},
   mounted() {
     console.log(this) 
   }
}
</script>

<style>
.cart-item {
   display: flex;
   flex-wrap: nowrap;
   justify-content: space-between;
   align-items: center;
   box-shadow: 0 0 8px 0 #c5c5c5;
   padding: 8px;
   margin-bottom: 8px;
}
.cart-item__image{
   max-width: 250px;
}
.cart-item__delete-btn {
   margin-left: 20px;
}
</style>