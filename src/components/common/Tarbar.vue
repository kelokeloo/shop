<template>
  <div class="tabbar">
    <ul>
      <template v-for="(item, index) in tabList" :key="index">
        <li class="item"
          :class="index === actived ? 'actived' : ''"
          @click="tabChange(index)"
        >
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.iconUrl"></use>
          </svg>
          <span>{{item.title}}</span>
        </li>
      </template>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router'

interface item {
  title: string,
  iconUrl: string,
  path: string
}

const tabList: item[] = [
  {title: '首页', iconUrl: '#icon-shouye', path: '/home'},
  {title: '分类', iconUrl: '#icon-paihangbang', path: '/category'},
  {title: '购物车', iconUrl: '#icon-dingdan', path: '/shopcar'},
  {title: '我', iconUrl: '#icon-shequ', path: '/personal'}
]

const router = useRouter()

// actived

const actived = ref(0)

const tabChange = (value: number)=>{
  actived.value = value
  router.replace(tabList[value].path)
}





</script>
<style scoped lang="scss">

.tabbar {
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: .5rem 0;
  box-shadow: 0px 0px 3px 1px #eee;
  background-color: white;
}

.tabbar ul {
  display: flex;
  justify-content: space-around;
}
.tabbar ul li {
  padding: .2rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all .3s;
  border-bottom: 0px solid #F44336;
}


.tabbar ul li svg {
  width: 1.5rem;
  height: 1.5rem;
}
.tabbar ul li span {
  font-size: .8rem;
}

.actived {
  transform: translateY(-10%);
  border-bottom: 3px solid #F44336 !important;
}

</style>