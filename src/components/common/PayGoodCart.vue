<template>
  <div class="cartBox">
    <div class="img">
      <img :src="imgUrl" alt="">
    </div>
    <div class="info">
      <div>{{name}}</div>
      <div>￥{{price}}</div>
      <div>x{{count}}</div>
    </div>

  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: 'payGoodCart'
})
</script>
<script setup lang="ts">
interface payData {
  goodIds: number,
  count: number, // 商品数量
  imgUrl: string,
  name: string,
  price: number
}

const props = defineProps<payData>()




</script>
<style scoped lang="scss">
.cartBox {
  background-color: #eee;
  border-radius: 5px;
  height: 5rem;
  padding: .5rem;
  display: flex;
  .img {
    border-radius: 5px;
    overflow: hidden;
    height: 5rem;
    aspect-ratio: 1/1;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info {
    flex: 1;
    margin-left: 1rem;
    &>:nth-child(1){
      font-size: 1.2rem;
      font-weight: 700;
    }
    &>:nth-child(2){
      color: red;
    }
  }
}

</style>