<template>
  <div>
    <router-view></router-view>
    <TarbarVue v-if="tabBarShow"></TarbarVue>
  </div>
</template>
<script setup lang="ts">
import TarbarVue from './components/common/Tarbar.vue';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';


const router = useRouter()
const route = useRoute()
console.log(route.path);

const tabBarShow = computed(()=>{
  // 以这些url开头的，都显示tabbar
  const reg = /^\/(\/home)|(\/)|(\/catergory)|(\/shopcar)|(\/personal)/;
  return reg.test(route.path)
})


</script>
<style scoped lang="scss">

</style>