<template>
  <div class="container">
    <div class="left">
      <slot name="left">
        <span class="iconfont icon-back" @click="handleClick"></span>
      </slot>
    </div>
    <div class="center">
      <slot name="center">
        <span>center</span>
      </slot>
    </div>
    <div class="right">
      <slot name="right">
        <span class="iconfont icon-3column"></span>
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'headerslot'
})
</script>
<script setup lang="ts">
import Login from "../../views/login/login.vue";
import { useRouter } from "vue-router";

// 返回逻辑

const router = useRouter()
const handleClick = ()=>{
  router.back()
}
</script>
<style scoped lang="scss">
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  background-color: #E53935;
  span {
    color: white;
  }
  .left {
    margin-left: 1rem;
    >span {
      font-size: 1.5rem;
    }
  }
  .right {
    margin-right: 1rem;
  }
}


</style>