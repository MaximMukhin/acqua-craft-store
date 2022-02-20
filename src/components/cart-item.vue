<template>
  <div class="cart-item">
     <img class="cart-item__image" :src=" require('../assets/images/' + cartItemData.image)" alt="">
     <div class="cart-item__info">
        <p>{{cartItemData.name}}</p>
        <p>{{cartItemData.price}}</p>
        <p>{{cartItemData.article}}</p>
     </div>
     <div class="cart-item__quantity">
        <p>Количество {{quantity}}</p>
        </div>
     <button class="cart-item__delete-btn">Delete</button>
  </div>
</template>

<script>
export default {
   name: 'cart-item',
   props: {
      quantity: {
         type: String,
         default: '...',
      },
      cartItemData: {
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
   max-width: 150px;
}
.cart-item__delete-btn {
   margin-left: 20px;
}
</style>