<template>
  <div class="container">
    <div class="back" @click="back">
      <span class="iconfont icon-back"></span>
    </div>
    <div class="search">
      <input type="text" :placeholder="placeHolder" autofocus 
      ref="inputRef"
      v-bind:value="searchData" @keydown.enter="Search">
      <span class="iconfont icon-sousuo" @click="Search"></span>
    </div>
    <div class="service">
      <span class="iconfont icon-xiaomi"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SearchHeader'
})
</script>


<script setup lang="ts">
import { ref, reactive, computed, VueElement } from 'vue'
import { useRouter } from 'vue-router';


const router = useRouter()

interface propsApi {
  searchData: string,
  placeHolder: string,
}
const props = withDefaults(defineProps<propsApi>(), {
  searchData: '',
  placeHolder: ''
})



const emit = defineEmits(['search'])


const inputRef = ref(null)


const Search = ()=>{
  // 获取触发事件的目标元素，再获取目标元素它的值
  
  emit('search', (inputRef.value as unknown as HTMLInputElement).value)
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