<template>
  <div class="box">
    <div class="tag">{{tag}}</div>
    <div class="img">
      <img :src="imgUrl" alt="img">
    </div>
    <div class="info">
      <h3>{{name}}</h3>
      <div>{{info}}</div>
      <div>￥{{price}}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Cart1'
})
</script>

<script setup lang="ts">
interface PropsApi {
  name?: string,
  info?: string,
  price?: string,
  imgUrl?: string,
  tag?: '销冠款' | '老铁推荐' | '爆款'
}


const props = withDefaults(defineProps<PropsApi>(), {
  name: '商品名',
  info: '核心产区滋味正',
  imgUrl: '',
  price: '99',
  tag: '销冠款'
})


</script>
<style scoped lang="scss">
.box {
  height: 5rem;
  border-radius: 5px;
  background-color: #F5F5F5;
  display: flex;
  align-items: center;
  padding: 1rem;
  position:relative;
}
.box .tag {
  position: absolute;
  top: 0;
  color: white;
  font-size: .9rem;
  background-color: rgb(245, 221, 116);
  padding: 0 .5rem;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
}
.box .img {
  width: 5rem;
  height: 5rem;
  position: relative;
  margin-right: 2rem;
}

.box .img img {
  width: 100%;
  height: 100%;
  border: 1px solid #aaa;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.box .info {
  flex: 1;
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  & :nth-child(2){
    padding: 0 .2rem;
    border-radius: 3px;
    background-color: #FFA726;
  }
  & :nth-child(3){
    color: #E53935;
    font-size: 1.2rem;
    font-weight: 700;
    font-style: italic;
  }
}

</style>