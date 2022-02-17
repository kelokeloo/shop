<template>
  <div>
    <div class="login" v-if="!isLogin">
      <span @click="handleClick">登录 / 注册</span>
    </div>
    <div class="account" v-else>
      <span>欢迎, {{userName}}</span>
      <span class="iconfont icon-tuichu logout" @click="logout"></span>
    </div>

    <div class="other">
      <ul>
        <li @click="handleAddrClick">地址管理</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
export default defineComponent({
  name: 'Personal'
})
</script>
<script setup lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import globalStore from "../store/global";
// 跳转到登录页面

const router = useRouter()
const handleClick = ()=>{
 router.push('/login')
}

const userName = ref('')

// isLogin 

const store = globalStore()

const isLogin = computed(()=>{
  if(store.isLogin){
    const name = window.sessionStorage.getItem('userName')!
    userName.value = name
  }
  
  return store.isLogin
})




// 登出
const logout = ()=>{
  window.sessionStorage.removeItem('token')
  window.sessionStorage.removeItem('userName')
  store.setIsLogin(false)
}

// 跳转到地址页面
const handleAddrClick = ()=>{
  router.push('/addr')
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

.account {
  padding: 1rem;
  background-color: #E57373;
  height: 10rem;
  span {
    font-size: 1.5rem;
    font-weight: 700;
  }
  display: flex;
  span.logout {
    margin-left: auto;
    color: white;
    transform: translateY(.3rem);
  }
}
</style>