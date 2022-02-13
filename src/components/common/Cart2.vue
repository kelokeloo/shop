<template>
  <div class="cartBox" @click="goToPage">
    <div class="img">
      <img :src="imgUrl">
    </div>
    <div class="info">
      <p class="msg">{{name}}</p>
      <p class="price">￥{{price}}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Cart2'
})
</script>


<script setup lang="ts">
import { useRouter } from 'vue-router'
interface PropsApi {
  id?: number,
  imgUrl?: string,
  name?: string,
  price?: string
}


const props = withDefaults(defineProps<PropsApi>(), {
 imgUrl: '',
 name: '高端茶具', 
 price: '99'
})

const router = useRouter()

const goToPage = ()=>{
  router.push('/detail/' + props.id)
  
}


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