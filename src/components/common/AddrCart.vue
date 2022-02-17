<template>
  <div class="box">
    <div>收货人：{{name}}</div>  
    <div>电话：{{phone}}</div>  
    <div class="area">地区：
      <template v-for="(item, index) in area" :key="index">
        <span>{{item}}</span>
      </template>
      <span></span>
    </div>  
    <div>详细地址：{{addr}}</div>  
    <div class="defaultTips" v-if="isDefault">默认</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, readonly } from "vue";
export default defineComponent({
  name: 'AddrCart'
})
</script>
<script setup lang="ts">
interface addrApi {
  name?: string,
  phone?: number,
  area?: Array<string>,
  addr?: string,
  isDefault?: boolean
}

const props = withDefaults(defineProps<addrApi>(), {
  name: '张三',
  phone: 12345678910,
  area: ()=>{
    return ['北京市','丰台区', '永外大街']
  },
  addr: '车站路12号',
  isDefault: false
})


</script>
<style scoped lang="scss">
.box {
  box-shadow: 0 0 1px 1px #ddd;
  background-color: #eee;
  padding: .5rem;
  border-radius: 5px;
  .area {
    span {
      margin-right: .5rem;
    }
  }
  position: relative;
  .defaultTips {
    position: absolute;
    top: 0;
    background-color: #F39C12;
    right: 1rem;
    
    padding: .2rem;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}




</style>
