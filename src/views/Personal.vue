<template>
  <div>
    <div class="login">
      <span @click="handleClick">登录 / 注册</span>
    </div>
    <div class="other">
      <ul>
        <li>地址管理</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Personal'
})
</script>
<script setup lang="ts">

import { useRouter } from "vue-router";
// 跳转到登录页面

const router = useRouter()
const handleClick = ()=>{
 router.push('/login')
}

</script>
<style scoped lang="scss">
.login {
  height: 10rem;
  background-color: #EF5350;
  display: flex;
  justify-content: center;
  align-items: center;
  >span {
    background-color: #F57C00;
    padding: .3rem;
    border-radius: 5px;
    box-shadow: 0 0 0 2px #FAFAFA;
    color: white;
  }
}

.other{
  padding: 1rem;
  li {
    background-color: #ECEFF1;
    padding: .5rem;
    border-radius: 5px;
  }
}
</style>