<template>
  <div class="listContainer">
    <div class="filter">
      <span :class="searchParams.type === '0' ? 'actived' : ''" @click="searchParams.type = '0'">综合
        <span class="iconfont icon-arrow-down-filling iconSize"></span>
      </span>
      <span  :class="searchParams.type === '1' ? 'actived' : ''" @click="searchParams.type = '1'">销量</span>
      <span class="price" @click="changePrice"  :class="searchParams.type === '2' ? 'actived' : ''">
        <span>价格</span>
        <span class="arrowBox">
          <span class="iconfont icon-arrow-up-filling iconSize" :class="searchParams.price === 'up' ? '' : 'inActived'"></span>
          <span class="iconfont icon-arrow-down-filling iconSize" :class="searchParams.price === 'down' ? '' : 'inActived'"></span>
        </span>
      </span>
      <span :class="searchParams.option.length !== 0 ? 'actived' : ''">
        <span>筛选</span>
        <span class="iconfont icon-shaixuan iconSize"></span>
      </span>
    </div>
    <div class="goodsList">
      <template v-for="item in goodsListData" :key="item.id">
        <Cart2Vue v-bind="item"></Cart2Vue>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'GoodsList'
})
</script>


<script setup lang="ts">
import { reactive, watch } from 'vue';
import Cart2Vue from './Cart2.vue';
import http from '../../http/index'
import globalStore from '../../store/global'

interface propsApi {
  keyword: string
}

const props = defineProps<propsApi>()


interface goodItemApi {
  id: number,
  imgUrl: string,
  name: string,
  price: string
}


// 搜索结果数据


const goodsListData = reactive<goodItemApi[]>([

])

interface paramsApi {
  query: string, // 查询字段
  type: '0' | '1' | '2', // 综合0、销量1、价格
  price: 'up' | 'down',// common、up、down 价格
  option: Array<string> // 其他参数
}
const searchParams = reactive<paramsApi>({
  query: '',
  type: '0',
  price: 'up',
  option: []
})

watch([props], (newValue)=>{
  searchParams.query = newValue[0].keyword
  
})


const store = globalStore()
// 获取数据
const getGoodsListData = async()=>{
  const data = await http.get('/api/goods', {
    params: searchParams
  });
  (data.data as unknown as Array<goodItemApi>).forEach(item=>{
    item.imgUrl = store.serverUrl + item.imgUrl
    goodsListData.push(item)
  })  
}

getGoodsListData()



// 切换搜索选项


const changePrice = ()=>{
  searchParams.type = '2'
  if(searchParams.price === 'down')
    searchParams.price = 'up'
  else 
    searchParams.price = 'down'
}

// 侦听选项更改, 更改之后重新发送请求
watch([searchParams], ()=>{
  getGoodsListData()
})


</script>
<style scoped lang="scss">
.filter {
  height: 2.5rem;
  background-color: #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #616161;
  &>:nth-child(n) {
    flex: 1;
    text-align: center;
    line-height: 100%;
  }
}

.actived {
  color: #FF5722;
}
.inActived {
  color: rgb(97, 97, 97)
}
.price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.arrowBox {
  display: inline-flex;
  flex-direction: column;
  margin-left: .2rem;
  span:nth-of-type(1) {
    transform: translateY(25%);
  }
  span:nth-of-type(2) {
    transform: translateY(-25%);
  }
}
.iconSize {
  font-size: .5rem;
}
.listContainer{
  margin-bottom: 5rem;
}
.goodsList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 1rem;
}

</style>