<template>
  <div class="carBox">
    <header class="header">
      <span class="iconfont icon-back"></span>
      <span>购物车</span>
      <span @click="isEdit=!isEdit">编辑</span>
    </header>
    <div class="body">
      <div class="bodyHeader" v-if="listArray.length">
        <ChoiceVue v-model:choice="globalChoice"></ChoiceVue>
        <span>商品</span>
      </div>
      <div v-else>购物车中暂时没有商品</div>
      <template v-for="(item, index) in listArray" :key="item.id">
        <shopCartVue
          :img-url="item.imgUrl"
          :title="item.title"
          :price="item.price"
          v-model:choice="choicelist[index]"
          v-model:count="countList[index]" 
        ></shopCartVue>
      </template>
    </div>
    <div>
      {{choicelist}}
      {{countList}}
    </div>
    
    <div class="totalPrice">
      <div>￥{{totalPrice}}</div>
      <div v-if="!isEdit">支付</div>
      <div v-else
        @click="deleteGoods"  
      >删除</div>
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
import { reactive, ref, computed } from "vue";
import http from '../http/index'
import globalStore from '../store/global'

interface propsApi {
  id: number,
  choice?: boolean,
  imgUrl?: string,
  title?: string,
  price?: number,
  count?: number
}

// choicelist
const choicelist = reactive<Array<boolean>>([])
// countList
const countList = reactive<Array<number>>([])

// 获取购物车数据
let listArray = reactive<Array<propsApi>>([])
const store = globalStore()

const getShopCarData = ()=>{
  http.get('/api/shopCar')
  .then(data=>{
    if((data as any).code !== 200){
      console.error('购物车数据请求错误')
    }
    // 处理响应式数据
    (((data as any).data) as unknown as Array<propsApi>).forEach(item=>{
      item.imgUrl = store.serverUrl + item.imgUrl
      listArray.push(item)
      choicelist.push(item.choice!)
      countList.push(item.count!)
    })
    console.log(listArray);
    
  })
}

getShopCarData()

// 商品全选
const globalChoice = computed<boolean>({
  get(){
    return choicelist.every(item=>{
      return item === true
    })
  },
  set(newValue){
    choicelist.forEach((item, index, arr)=>{
      arr[index] = newValue as boolean
    })
  }
})


// 计算总价格
const totalPrice = computed(()=>{
  let total = 0
  console.log(listArray);
  
  listArray.forEach((item, index)=>{
    if(choicelist[index]){
      total += countList[index] * item.price!
    }
  })
  return total
})

// 购物车编辑功能
const isEdit = ref(false)

const deleteGoods = ()=>{
  // 逆向删除
  for(let i = choicelist.length; i >= 0; i--){
    if(choicelist[i]){
      listArray.splice(i, 1)
      choicelist.splice(i, 1)
      countList.splice(i, 1)
    }
  }
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

.totalPrice {
  position: fixed;
  bottom: 4.5rem;

  background-color: #E53935;
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // align-items: center;
  & :nth-child(n){
    color: white;
  }
  & :nth-child(1){
    font-weight: 700;
    line-height: 3rem;
    margin-left: 2rem;
    font-size: 1.5rem;
  }
  & :nth-child(2){
    background-color: #FFB300;
    width: 30%;
    flex-shrink: 0;
    text-align: center;
    line-height: 3rem;
  }
}

</style>