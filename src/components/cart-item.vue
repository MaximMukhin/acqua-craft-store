<template>
  <div class="cart-item">
     <img class="cart-item__image" :src=" require('../assets/images/' + cartItemData.image)" alt="">
     <div class="cart-item__info">
        <p>{{cartItemData.name}}</p>
        <p>Артикул: {{cartItemData.article}}</p>
        <p>Цвет: {{cartItemData.color}}</p>
        <p>Цена: {{cartItemData.price}}</p>
     </div>
     <div class="cart-item__quantity">
        <p>Количество {{cartItemData.quantity}}</p>
        </div>
     <button class="cart-item__delete-btn" @click="deleteFromCartItem">Delete</button>
  </div>
</template>

<script>
export default {
   name: 'cart-item',
   props: {
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
   methods: {
      deleteFromCartItem() {
         this.$emit('deleteFromCartItem')
      }
   },
   mounted() {
   },
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
  display: inline-block;
  font-family: arial,sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: rgb(68,68,68);
  text-decoration: none;
  user-select: none;
  padding: .2em 1.2em;
  outline: none;
  border: 1px solid rgba(0,0,0,.1);
  border-radius: 2px;
  background: rgb(245,245,245) linear-gradient(#f4f4f4, #f1f1f1);
  transition: all .218s ease 0s;
}
.cart-item__delete-btn:hover {
  color: rgb(24,24,24);
  border: 1px solid rgb(198,198,198);
  background: #f7f7f7 linear-gradient(#f7f7f7, #f1f1f1);
  box-shadow: 0 1px 2px rgba(0,0,0,.1);
}
.cart-item__delete-btn:active {
  color: rgb(51,51,51);
  border: 1px solid rgb(204,204,204);
  background: rgb(238,238,238) linear-gradient(rgb(238,238,238), rgb(224,224,224));
  box-shadow: 0 1px 2px rgba(0,0,0,.1) inset;
}
</style>