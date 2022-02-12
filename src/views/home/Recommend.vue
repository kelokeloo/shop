<template>
  <div>
    <!-- 轮播 -->
    <div class="carousel">
      <el-carousel height="150px" arrow="always" autoplay>
        <el-carousel-item v-for="item in scrollData" :key="item.goodId">
          <div class="imgBox">
            <img :src="item.imgUrl" :alt="String(item)">
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- icons -->
    <div class="iconList">
      <template v-for="(item, index) in iconList" :key="index">
      <section>
        <svg class="icon" aria-hidden="true">
          <use :xlink:href="item.label"></use>
        </svg>
        <span>{{item.name}}</span>
      </section>
      </template>
    </div>
    <!-- 热门推荐 -->
    <ShowBox class="hotBox">
      <template v-for="item in hotBoxData" :key="item.id">
        <Cart1 v-bind="item"></Cart1>

      </template>
    </ShowBox>
    <ShowBox class="guessBox" title="猜你喜欢">
      <div class="guessContainer">
        <template v-for="item in guessGoodsData" :key="item.id">
          <Cart2 v-bind="item"></Cart2>
        </template>
      </div>
    </ShowBox>

  </div>
</template>
<script setup lang="ts">
import ShowBox from '@/components/home/ShowBox1.vue'
import Cart1 from '@/components/common/Cart1.vue'
import Cart2 from '@/components/common/Cart2.vue'
import { reactive } from 'vue';

import http from '../../http/index'
import globalStore from '../../store/global'

interface iconItem {
  label: string,
  name: string,
  path: string
}

const iconList: Array<iconItem> = [
  { label: '#icon-a-gouwudaigouwu', name: '超市', path: '' },
  { label: '#icon-a-dianshijixinwenxinxi', name: '电器', path:'' },
  { label: '#icon-a-yifufenggezhuti', name: '衣服', path:'' },
  { label: '#icon-a-shuguoshuzhiwuziranjienengjianpaieryanghuatan', name: '水果', path: '' },
  { label: '#icon-zuanshi', name: '会员' , path: ''},
]


const store = globalStore()

// 滚动区域
interface scrollDataApi {
  imgUrl: string,
  goodId: number
}

const scrollData = reactive<scrollDataApi[]>([])

const getScrollData = async()=>{
  const data = await http.get('/api/home/recommend/scoll') as any;

  (data.data as Array<any>).forEach(item=>{
    item.imgUrl = store.serverUrl + item.imgUrl
    scrollData.push(item)
  })
}

getScrollData()

// 爆款推荐
interface Cart1Api {
  id: number,
  name?: string,
  info?: string,
  price?: number,
  imgUrl?: string,
  tag?: '销冠款' | '老铁推荐' | '爆款'
}

const hotBoxData = reactive<Cart1Api[]>([])

const getHotBoxData = async()=>{
  const res = await http.get('/api/home/recommend/hot')
  ;(res.data as Array<Cart1Api>).forEach(item=>{
    item.imgUrl = store.serverUrl + item.imgUrl
    hotBoxData.push(item)
  })
  
}

getHotBoxData()

// 猜你喜欢
interface guessGoodsApi {
  imgUrl?: string,
  msg?: string,
  price?: number
}

const guessGoodsData = reactive<guessGoodsApi[]>([])

const getGuessGoodsData = async()=>{
  const res = await http.get('/api/home/recommend/guess')
  
  ;(res.data as Array<guessGoodsApi>).forEach(item=>{
    item.imgUrl = store.serverUrl + item.imgUrl
    guessGoodsData.push(item)
  })
  
}

getGuessGoodsData()




</script>
<style scoped lang="scss">
.carousel {
  border-radius: 5px;
  overflow: hidden;
}


.iconList {
  margin: 1rem 0;
  padding: 1rem 0;
  display: flex;
  justify-content: space-around;
  svg {
    width: 2rem;
    height: 2rem;
  }
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  box-shadow: 0 0 1px 1px #eee;
  border-radius: 5px;
}

.hotBox {
  & div:nth-child(n){
    margin-bottom: 1rem;
  }  
  & div:last-child{
    margin-bottom: 0;  
  }
}
.guessBox {
  margin-top: 1rem;
}

.guessBox .guessContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.imgBox {
  position: relative;
  height: 100%;
  img {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}

</style>