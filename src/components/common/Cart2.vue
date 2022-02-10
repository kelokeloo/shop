<template>
  <div class="cartBox">
    <div class="img">
      <img :src="imgUrl">
    </div>
    <div class="info">
      <p class="msg">{{name}}</p>
      <p class="price">￥{{price}}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
interface PropsApi {
  imgUrl?: string,
  name?: string,
  price?: string
}


const props = withDefaults(defineProps<PropsApi>(), {
 imgUrl: '',
 name: '高端茶具', 
 price: '99'
})

</script>
<style scoped lang="scss">
.cartBox {
  flex-shrink: 0;
  width: 48%;
  height: 11rem;
  border-radius: 5px;
  background-color: #F5F5F5;
  margin-bottom: .5rem;
  overflow: hidden;
}

.cartBox .img {
  height: 7rem;
  position: relative;
  width: 100%;
  overflow: hidden;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.cartBox .info {
  padding: .5rem;
  .msg {
    font-size: .9rem;
    letter-spacing: 1px;
  }
  .price {
    font-weight: 700;
    font-style: italic;
    color: #E53935;
  }
}

</style>