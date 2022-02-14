<template>
  <div class="carBox">
    <header class="header">
      <span class="iconfont icon-back"></span>
      <span>购物车</span>
      <span>编辑</span>
    </header>
    <div class="body">
      <div class="bodyHeader">
        <ChoiceVue :choice="true"></ChoiceVue>
        <span>商品</span>
      </div>
      <shopCartVue  :count="testCartData.count" @setCount="countHandle"></shopCartVue>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ShopCar'
})
</script>
<script setup lang="ts">
import shopCartVue from "../components/shopCar/shopCart.vue";
import ChoiceVue from "../components/shopCar/Choice.vue";
import { reactive } from "vue";

interface propsApi {
  choice?: boolean,
  imgUrl?: string,
  title?: string,
  price?: number,
  count?: number
}

const testCartData = reactive<propsApi>({
  choice: true,
  imgUrl: '',
  title: '标题',
  price: 99,
  count: 1
})

const countHandle = (v: any)=>{
  testCartData.count = v 
}


</script>
<style scoped lang="scss">
.carBox .header {
  height: 3rem;
  padding: 0 1rem;
  background-color: #E53935;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    color: white;
    &:nth-child(1){
      font-size: 2rem;
    }
    &:nth-child(3){
      font-size: .8rem;
    }
  }
}


.body{
  padding: 1rem; 
  .bodyHeader {
    display: flex ;
  }
}


</style>