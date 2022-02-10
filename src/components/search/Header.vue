<template>
  <div class="container">
    <div class="back" @click="back">
      <span class="iconfont icon-back"></span>
    </div>
    <div class="search">
      <input type="text" :placeholder="searchPlaceholder" autofocus>
      <span class="iconfont icon-sousuo"  @click="Search"></span>
    </div>
    <div class="service">
      <span class="iconfont icon-xiaomi"></span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const searchPlaceholder = ref('港风圆领卫衣')

const router = useRouter()

const Search = ()=>{
  console.log('search');
}

const back = ()=>{
  router.back()
}





</script>
<style scoped lang="scss">
.container {
  box-sizing: border-box;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  height: 3rem;
  background-color: #F44336;
  display: flex ;
  align-items: center;
  padding: 1rem;
}




.container .search {
  flex: 1;
  height: 1.6rem;
  border-radius: 9999px;
  background-color: white;
  margin: 0 1rem;
  display: flex;
  align-items: center;
  position: relative;
  >input {
    width: 80%;
    border: 0;
    outline: 0;
    margin-left: 1rem;
  }
  span {
    font-weight: 900;
    position: absolute;
    right: .5rem;
  }
}

.container .back span {
  width: 1rem;
  height: 1rem;
  font-size: 1.7rem;
  color: white;
}
.container .service span {
  width: 1rem;
  height: 1rem;
  color: white;
  font-size: 2rem;
}
</style>