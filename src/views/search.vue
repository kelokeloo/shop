<template>
  <div>
    <HeaderVue :searchData="searchWord" 
    :placeHolder = 'placeHolder'
    @search="getSearchData"></HeaderVue>
    <div class="placeHolder"></div>
    <!-- 搜索推荐 -->
    <div class="searchRecommend" v-show="isRecommendView">
      <!-- 历史搜索 -->
      <div class="history commonStyle" v-if="is_history_view">
        <div class="historyTitle">
          <span class="iconfont icon-lishi fontStyle"></span>
          <strong>历史搜索</strong>
          <span class="ClearHistory" @click="clearhistory">清空历史记录</span>
        </div>
        <div class="box">
          <template v-for="(item, index) in historyData" :key="index">
            <span class="searchKey" @click="getSearchData(item)">{{item}}</span>
          </template>
        </div>
      </div>
      <!-- 热门商品 -->
      <div class="hotGoods commonStyle">
        <span class="iconfont icon-hot fontStyle"></span>
        <strong>热门搜索</strong>
        <div class="box">
          <template v-for="(item, index) in hotData" :key="index">
            <span class="searchKey" @click="getSearchData(item)">{{item}}</span>
          </template>
        </div>
      </div>
      <!-- 商品推荐 -->
      <div class="goodRecommend commonStyle">
        <span class="iconfont icon-dianzan fontStyle"></span>
        <strong>热门搜索</strong>
        <div class="recommendBox">
          <template v-for="item in recommendGoods" :key="item.id">
            <Cart2Vue v-bind="item"></Cart2Vue>
          </template>
        </div>
      </div>
    </div>
    <!-- 搜索列表 -->
    <div class="searchList" v-if="!isRecommendView">
      <GoodsListVue :keyword="searchWord"></GoodsListVue>
    </div>

  </div>
</template>
<script setup lang="ts">
import http from '../http';
import HeaderVue from '../components/search/Header.vue';
import { reactive, computed, ref } from 'vue';
import Cart2Vue from '../components/common/Cart2.vue';

import globalStore from '../store/global'

import { useRouter, useRoute } from 'vue-router';

import GoodsListVue from '../components/common/GoodsList.vue';


const historyData = reactive<string[]>([])

const is_history_view = computed(()=>{
  return historyData.length === 0 ? false : true
})


// 热门搜索
const hotData = reactive<string[]>([
  '紫砂壶',
  '电视机',
  '冰箱'
])

// 推荐商品
interface dataApi {
  id?:  number,
  imgUrl?: string,
  name?: string,
  price?: string
}

const store = globalStore()

const recommendGoods = reactive<Array<dataApi>>([])

const getRecommendGoods = async()=>{
  
  const data = await http.get('/api/home/recommend/hot');
  (data.data as unknown as Array<dataApi>).forEach(item=>{
    item.imgUrl = store.serverUrl + item.imgUrl
    recommendGoods.push(item)
  })
}

getRecommendGoods()

// 搜索商品
const searchWord = ref('')
const placeHolder = ref('港风圆领卫衣')

const router = useRouter()
const route = useRoute()

const search = (value: string)=>{
  searchWord.value = value  
}

const searchResult = reactive<dataApi[]>([ 
])

// 控制推荐页是否显示
const isRecommendView = computed(()=>{
  return searchWord.value === '' ? true : false
})

const getSearchData = (value: string)=>{
  if(!value){
    value = placeHolder.value
  }
  searchWord.value = value

  // 存入历史搜索
  // 去重
  const index = historyData.findIndex((item)=>item===value)
  if(index !== -1){
    historyData.splice(index, 1)
  }
  historyData.unshift(value)

  // 将搜索的信息，存入本地
  const arr = historyData.map(item=>item)
  console.log('arr', arr);
  localStorage.setItem('searchHistory', arr.toString())
  console.log('localStorage', localStorage.getItem('searchHistory'));
}

// 历史信息存储控制

// 加载本地历史
const loadHistory = ()=>{
  let history = localStorage.getItem('searchHistory')
  if(!history){
    localStorage.setItem('searchHistory', '[]')
  }
  else{
    const historyList = history.split(',')
    historyList.forEach(item=>{
      historyData.push(item)
    })

  }
}
loadHistory()
// 清空本地历史
const clearhistory = ()=>{
  localStorage.removeItem('searchHistory')
  while(historyData.length){
    historyData.pop()
  }
}



</script>
<style scoped lang="scss">
.fontStyle {
  font-weight: 700;
  color: #E53935;
}
.searchRecommend {
}

.commonStyle {
  padding: 1rem;
  :nth-child(1){
    margin-right: .2rem;
  }
}

.box {
  padding: .5rem;
}
.searchKey {
  margin: .2rem .2rem;
  padding: .1rem;
  border-radius: 5px;
  border: 1px solid #aaa;
}

.recommendBox {
  width: 100%;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

// searchList

.searchList {

}
.placeHolder {
  height: 3rem;
}

.historyTitle {
  display: flex;
  .ClearHistory {
    margin-left: auto;
  }
}

</style>