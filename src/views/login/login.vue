<template>
  <div>
    <header class="header">
      <span class="iconfont icon-back" @click="back"></span>
      <span>登录</span>
      <span class="iconfont icon-shouye" @click="goToHome"></span>
    </header>
    <div class="content">
      <div class="account">
        <input type="text" placeholder="手机号" v-model="form.account">
      </div>
      <div class="password">
        <input type="password" placeholder="密码"  v-model="form.password">
      </div>
      <div class="loginBtn">
        <button class="login" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import globalStore from "../../store/global";

export default defineComponent({
  name: 'login'
})
</script>
<script setup lang="ts">
import { useRouter } from "vue-router";
import http from "../../http";

const router = useRouter()
const back = ()=>{
  router.back()
}

const goToHome = ()=>{
  router.replace('/home')
}

// login-form
interface FormApi {
  account: string,
  password: string,
  verify: string
}

const form = reactive<FormApi>({
  account: '',
  password: '',
  verify: ''
})

// 登录
const store = globalStore()

const login = ()=>{
  console.log(form);
  http.post('/api/login', form)
  .then((res)=>{
    const code = (res as any).code
    const data = ((res as any).data as unknown as {msg: string, token: string, userName: string})
    console.log(data.msg);
    if(code === 200){
      // 成功登录
      console.log(data);
      window.sessionStorage.setItem('token', data.token)
      router.push('/home')
      // 存储信息
      window.sessionStorage.setItem('userName', data.userName)
      
      // 改变stroe状态
      store.setIsLogin(true)
    }
    else {
      alert('密码错误')
    }
  })
}


</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 2.5rem;
  background-color: #E53935;
  span {
    color: white;
    &:nth-child(1){
      font-size: 2rem;
    }
    &:nth-child(3){
      font-size: 1.2rem;
    }
  }
}

.content {
  padding: 1rem;
  input {
    border: 1px solid #aaa;
    outline: 0;
    height: 2.5rem;
    border-radius: 5px;
    margin-bottom: 1rem;
    text-indent: 1rem;
  }
  div {
    display: flex;

    input {
      flex: 1;
    }
    button.msg {
      height: 2.5rem;
      margin-left: .5rem;
      border-radius: 5px;
      background-color: #E53935;
      padding: .5rem;
      color: white;
      border: 0;
    }
    button.login {
      width: 100%;
      padding: .5rem;
      border: 0;
      color: white;
      border-radius: 5px;
      background-color: #E53935;
    }
  }
}
</style>