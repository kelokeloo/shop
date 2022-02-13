<template>
  <div class="content">
    <div class="classify">
      <ul>
        <template v-for="(item, index) in classifyList" :key="item.id"  >
          <li :class="index === actived ? 'actived' : ''"
            @click="handleClick(index)"
          >{{item.title}}</li>
        </template>
      </ul>
    </div>
    <div class="detail" ref="categoryBox" @scroll="handleScroll">
      <ul class="classSection">
        <!-- <template > -->
          <li v-for="item in classifyList" :key="item.id" :ref="setlisRef"> 
            <h3>{{item.title}}</h3>
            <ul>
              <template v-for="content in item.list" :key="content.id"  >
                <li>
                  <div class="detailBox">
                    <img :src="content.imgUrl" :alt="String(content.id)">
                    <span>{{content.name}}</span>
                  </div>
                </li>
              </template>
            </ul>
          </li>
        <!-- </template> -->
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'Category'
})
</script>
<script setup lang="ts">
import { reactive, ref, onMounted, nextTick, onUpdated, ComponentPublicInstance, ComponentOptionsBase } from 'vue'
import http from '../http/index'
import globalStore from '../store/global'

interface item {
  id: number,
  imgUrl: string,
  name: string
}

interface classifyItem{
  id: number,
  title: string,
  list: Array<item>
}

const classifyList = reactive<Array<classifyItem>>([])
// store
const store = globalStore()

// 获取分类数据
const getClassifyList = async()=>{
 const data = await http.get('/api/category')
 ;(data.data as unknown as Array<classifyItem>).forEach(item=>{
   item.list.forEach(detailItem=>{
     detailItem.imgUrl = store.serverUrl + detailItem.imgUrl
   })
   classifyList.push(item)
 })
 console.log(data);
}
getClassifyList()

// categoryBox

const categoryBox = ref(null)

const liRefs = ref([])

const lisOffset = ref<Array<number>>([])

const setlisRef = (el: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null)=>{
  if(el)
    (liRefs.value as Array<Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> >).push(el)
}

const getLisElement = ()=>{
  const lis = Array.from(liRefs.value)
  lis.forEach((item)=>{
    lisOffset.value.push((item as unknown as HTMLLIElement).offsetTop)
  })
}

onUpdated(()=>{
  getLisElement();
  // test
  const lis = Array.from((categoryBox.value as unknown as HTMLElement).children);

  (lis as unknown as Array<HTMLElement>).forEach(item=>{
    console.log(item);
  })

})

// 导航按下的时候

const handleClick = (index: number)=>{
  (categoryBox.value as unknown as HTMLElement).scrollTo({
    left: 0,
    top: lisOffset.value[index],
    behavior: 'smooth'
  });
}

// 监听滚动事件

const actived = ref(0)

const handleScroll = (e: Event)=>{
  const scrollTop = (e.target as unknown as HTMLElement).scrollTop;

  (Array.from(lisOffset.value)).some((item, index)=>{
    if(scrollTop < item){
      actived.value = index -1;
      return true
    }
    return false
  })
  
}


</script>
<style scoped lang="scss">
.content {
  display: flex;
  .classify {
    width: 25%;
    height: 100vh;
    box-shadow: 0px -5px 5px 1px #eee;
    >ul {
      display: flex;
      flex-direction: column;

      >li {
        margin: .5rem 0;
        padding: .5rem 0;
        text-align: center;
        line-height: 100%;
        border-left: 0px solid #E53935;
        transition: border-left .2s;
      }
    }
  }
  .detail {
    >ul.classSection{
      position: relative;
      top: 0;
      transition: top .3s;
    }

  }
}

.actived {
  border-left: 5px solid #E53935 !important;
}

.content .detail{
  flex: 1;
  padding: 1rem;
  overflow: auto;
  height: 100vh;
  box-sizing: border-box;
  >ul {
    >li{
      h3 {
        text-align: center;
      }
      >ul {
        display: flex;
        flex-wrap: wrap;
        padding: 1rem 0;
        >li {
          width: 33%;
          flex-shrink: 0;
          .detailBox {
            display: flex;
            flex-direction: column;
            // justify-content: center;
            align-items: center;
            margin-bottom: 1rem;
          }
        }
      }
    }
  }
}



</style>