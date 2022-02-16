<template>
  <div class="cardBox">
    <ChoiceVue v-bind:choice="choice" @update:choice="handleChoice"></ChoiceVue>
    <div class="img">
      <img :src="imgUrl" alt="img">
    </div>
    <div class="info">
      <div>{{title}}</div>
      <div>￥{{price}}</div>
      <div class="control">
        <span @click="sub">-</span>
        <span class="value">{{count}}</span>
        <span @click="add">+</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'shopCart'
})
</script>
<script setup lang="ts">
import ChoiceVue from "./Choice.vue";

interface propsApi {
  choice?: boolean,
  imgUrl?: string,
  title?: string,
  price?: number,
  count?: number
}


const props = withDefaults(defineProps<propsApi>(), {
  choice: false,
  imgUrl: '',
  title: 'title',
  price: 0,
  count: 0
})

const emit = defineEmits(['update:choice','update:count'])


// 加减
const sub = ()=>{
  if(props.count <= 1) return
  emit('update:count', props.count - 1)
}
const add = ()=>{
  emit('update:count', props.count + 1)
}

// 处理选择
const handleChoice = (value:any)=>{
  
  emit('update:choice', value)
}


</script>
<style scoped lang="scss">
.cardBox {
  background-color: #eee;
  border-radius: 5px;
  height: 6rem;
  display: flex;
  align-items: center;
  padding: 0 .5rem;
  margin-top: 1rem;
  .img {
    width: 5rem;
    aspect-ratio: 1/1;
    border: 1px solid #aaa;
    margin: 0 .5rem;
    border-radius: 5px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .info{
    flex: 1;
    box-sizing: border-box;
    padding: .3rem;
    height: 100%;
    position: relative;
    &>:nth-child(1){
      font-size: 1.5rem;
      font-weight: 700;
    }
    &>:nth-child(2){
      color: #E53935;
    }
    .control {
      position: absolute;
      right: 1rem;
      span:nth-child(1), span:nth-child(3){
        display: inline-block;
        width: 1.2rem;
        aspect-ratio: 1/1;
        border: 1px solid #aaa;
        text-align: center  ;
      }
      .value {
        margin: 0 .5rem;
      }
    }
  }
}
</style>