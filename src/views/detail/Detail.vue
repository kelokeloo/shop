<template>
  <div>
    <header class="header">
      <span class="iconfont icon-back" @click="back"></span>
    </header>
    <div class="imgs">
      <el-carousel class="carousel" arrow="always">
        <el-carousel-item v-for="(item, index) in goodInfo.image" :key="index">
        <div class="imgBox">
          <img :src="item" alt="index" class="img">
        </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="info">
      <h2>{{goodInfo.name}}</h2>
      <div>{{goodInfo.info}}</div>
      <div class="support">
        <template v-for="(item, index) in goodInfo.support" :key="index">
          <span>{{item}}</span>
        </template>
      </div>
      <div class="price">
        <span>￥{{goodInfo.price}}</span>
      </div>
    </div>
    <footer class="footer">
      <span class="iconfont icon-xiaomi"></span>
      <span class="iconfont icon-tianchongxing-"></span>
      <span class="iconfont icon-shoucang"></span>
      <span class="addCar">加入购物车</span>
      <span class="Buy">立即购买</span>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'detail'
})
</script>



<script setup lang="ts">
import { ref, onUnmounted, onActivated } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import http from '../../http';
import globalStore from '../../store/global';
const route = useRoute()

// 商品ID
interface GoodIdApi {
  id: number
}
interface GoodInfoApi {
  id: number,
  name: string,
  info: string,
  price: number,
  support: Array<string>,
  image: Array<string>
}

const goodId = ref<number>(Number(((route.params as any).id)))


const goodInfo = ref<GoodInfoApi>({
  id: 0,
  name: 'name',
  info: 'info',
  price: 0,
  support: [],
  image: []
})

const store = globalStore()
const getGoodDetail = async(id: number)=>{
  const data = await http.get('/api/detail/' + id);
  goodInfo.value = (data.data as unknown as GoodInfoApi)
  
  goodInfo.value.image.forEach((item, index, arr)=>{
    arr[index] = store.serverUrl + item
  })
  console.log(data);
  
}

getGoodDetail(goodId.value)

// back
const router = useRouter() 
const back = ()=>{
  router.back()
}


// keep-alive
onUnmounted(()=>{
  console.log('销毁组件');
})

onActivated(()=>{
  const newGoodId = Number(route.params.id);
  if(goodId.value === newGoodId) return
  getGoodDetail(newGoodId)
  goodId.value = newGoodId
})


</script>
<style scoped lang="scss">
.imgs {
  width: 100%;
  aspect-ratio: 1/1;
  margin-top: 2.5rem;
}
.imgBox {
  width: 100%;
  height: 100%;
  position: relative;
}
.img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.carousel {
  height: 100%;
}
:deep(.el-carousel__container) {
  height: 100% !important;
}
// header 
.header {
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100%;
  height: 2.5rem;
  background-color: #E53935;
  display: flex;
  align-items: center;
  box-shadow: 0px 0px 1px 1px #eee;
  >span {
    color: white;
    font-size: 2rem;
    font-weight: 700;
    margin-left: .5rem;
  }
}

// 详细信息
.info {
  padding: 1rem;
  >div {
    margin-top: 1rem;
  }
  .support {
    >span {
      background-color: #FB8C00;
      margin-right: .5rem;
      padding: .1rem .5rem;
      border-radius: 9999px;
    }
  }
  .price{
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    color: #E53935;
  }
}

.footer {
  box-shadow: 0 0 1px 1px #eee;
  width: 100%;
  height: 3rem;
  background-color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  span:nth-child(-n + 3){
    flex: 1;
    font-size: 1.5rem;
  }
  span:nth-child(n + 4){
    color: white;
    letter-spacing: 1 px;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .addCar {
    width: 30%;
    height: 100%;
    background-color: #FFA726;
  }
  .Buy {
    width: 30%;
    height: 100%;
    background-color: #E53935;
  }
}

</style>