<template>
  <div>
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive include="detail">
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
    <TarbarVue v-if="tabBarShow"></TarbarVue>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  name: 'App'
})
</script>


<script setup lang="ts">
import TarbarVue from './components/common/Tarbar.vue';
import { computed, defineComponent } from 'vue';
import { useRouter, useRoute, RouteLocationRaw } from 'vue-router';

import Detail from './views/detail/Detail.vue';

const router = useRouter()
const route = useRoute()

const tabBarShow = computed(()=>{
  // 以这些url开头的，都显示tabbar
  const reg = /(^\/home.*)|(^\/category.*)|(^\/shopcar.*)|(^\/personal.*)|(^\/search.*)/;
  return reg.test(route.path) 
})


</script>
<style scoped lang="scss">

</style>