<template>
  <div class="container">
    <HeaderVue></HeaderVue>
    <div class="main" id="main">
      <div class="tab">
        <!-- tab -->
        <el-tabs v-model="tabActive"  @tab-click="handleTabClick">
          <template v-for="item in tabList" :key="item.id">
            <el-tab-pane :label="item.label" :name="item.relativePath"></el-tab-pane>
          </template>
        </el-tabs>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'home'
})
</script>
<script setup lang="ts">
import HeaderVue from '../components/home/Header.vue';
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import axios from 'axios'
// import { get } from 'http';

interface tabPaneApi{
  id: number,
  label: string,
  relativePath: string
}

const tabList: Array<tabPaneApi> = [
  {
    id: 1,
    label: '推荐',
    relativePath: '/home/recommend'
  },
  {
    id: 2,
    label: '11*11',
    relativePath: '/home/11'
  },
  {
    id: 3,
    label: '过年啦',
    relativePath: '/home/springfestival'
  }
]



const tabActive = ref('/home/recommend')

// 路由
const router = useRouter()

const handleTabClick = (pane: any)=>{
  router.replace(pane.props.name)
}





</script>
<style scoped lang="scss">
.main {
  margin-top: 3rem;
}

.main .tab{
  padding: 0 1rem;
}



.main .content {
  padding: 0 1rem;
}


.content {
  margin-bottom: 5rem;
}


</style>