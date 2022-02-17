<template>
  <div>
    <!-- 头 -->
    <HeaderSlotVue>
      <template v-slot:center>
        <span style="color: white;">支付</span>
      </template>
    </HeaderSlotVue>
    <!-- 主体内容 -->
    <div class="body">
      <div class="addr">
        <h3 style="margin-bottom: .5rem;">收货地址：</h3>
        <AddrCartVue></AddrCartVue>
      </div>
      <div class="pay">
        <h3 style="margin: .5rem 0;">支付方式:</h3>
        <div class="payBox">
          <template v-for="item in payWay" :key="item.id">
            <span :class="actived === item.id ? 'actived' : ''">{{item.name}}</span>
          </template>
        </div>
        <div class="goodBox">
          <template v-for="item in store.payListData" :key="item.goodIds">
            <PayGoodCartVue v-bind="item">

            </PayGoodCartVue>
          </template>
        </div>
        <div class="totalBox">
          <span>
            ￥{{totalPrice}}
          </span>
          <span>提交订单</span>
        </div>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: 'paydetail'
})
</script>
<script setup lang="ts">
import HeaderSlotVue from "../../components/common/HeaderSlot.vue";
import AddrCartVue from "../../components/common/AddrCart.vue";

import { reactive, ref } from "vue";

import globalStore from "../../store/global";

import PayGoodCartVue from "../../components/common/PayGoodCart.vue";

 const payWay = reactive([
   {id: 0, name: '微信'},
   {id: 1, name: '支付宝'},
   {id: 2, name: '银联'},
 ])

 const actived = ref(0)


const store = globalStore()

const getGoodsInfo = ()=>{
  console.log(store.payListData);

}

getGoodsInfo()


// 总金额


const totalPrice = computed(()=>{
  let total = 0;
  store.payListData.forEach(item=>{
    console.log(item); 
    total += item.count * item.price   
  })
  return total
})



</script>
<style scoped lang="scss">
.body {
  padding: 1rem;
  position: relative;
  .totalBox {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 3rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 1px 1px #ddd;
    &>:nth-child(1){
      margin-left: 1rem;
      color: #E53935;
      font-weight: 500;
      font-size: 1.2rem;
    }
    &>:nth-child(2){
      text-align: center;
      line-height: 3rem;
      color: white;
      width: 30%;
      display: block;
      height: 100%;
      background-color: #E53935;
    }
  }
}
.pay .payBox span{
  border: 1px solid #aaa;
  margin-right: .5rem;
  padding: 3px;
  border-radius: 5px;
}

.actived {
  border: 1px solid red !important;
}

.goodBox {
  &>:nth-child(n){
    margin-top: 1rem;
  }
}


</style>