<template>
  <div class="container">
    <div class="logo">
      <span class="iconfont icon-tianchongxing-"></span>
    </div>
    <div class="search" @click="jumpSearch">
      <input type="text" :placeholder="searchPlaceholder" autofocus>
      <span class="iconfont icon-sousuo"></span>
    </div>
    <div class="service">
      <span class="iconfont icon-xiaomi"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'HomeHeader'
})
</script>


<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';


const searchPlaceholder = ref('港风圆领卫衣')

const router = useRouter()

const jumpSearch = ()=>{
  searchPlaceholder.value
  router.push('/search')
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

.container .logo span {
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