<template>
  <div>
    <HeaderSlotVue>
      <template v-slot:center>
        <span>地址管理</span>
      </template>
    </HeaderSlotVue>
    <div class="body">
      <template v-for="item in addrs" :key="item.id">
        <AddrCartVue v-bind="item" :is-default="defaultAddrId === item.id"></AddrCartVue>
      </template>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  name: 'addrShow'
})
</script>
<script setup lang="ts">
import HeaderSlotVue from "../../components/common/HeaderSlot.vue";
import AddrCartVue from "../../components/common/AddrCart.vue";
import http from "../../http";
import { onUpdated, ref } from "vue";


interface addrApi {
  id: number,
  name?: string,
  phone?: number,
  area?: Array<string>,
  addr?: string
}

// 获取收货地址
const addrs = reactive<Array<addrApi>>([])
const defaultAddrId = ref(0)

const getAddrs = ()=>{
  http.get('/api/addr')
  .then((data)=>{
    // 清空数组
    addrs.splice(0, addrs.length);
    
    ((data as any).data.addrs as unknown as Array<addrApi>)
    .forEach((item)=>{
      addrs.push(item)
    })
    defaultAddrId.value = (data as any).data.default
  })
}

getAddrs()




</script>
<style scoped lang="scss">
.body {
  padding: 1rem;
  &>:nth-child(n){
    margin-bottom: 1rem;
  }

}
</style>