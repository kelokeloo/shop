<template>
  <div class="box">
    <header class="header">
      <span></span>
      <h2>{{title}}</h2>
      <span></span>
    </header>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'ShowBox1'
})
</script>

<script setup lang="ts">

interface PropsApi {
  title?: string
}

const props = withDefaults(defineProps<PropsApi>(), {
  title: '爆款推荐'
})


</script>
<style scoped lang="scss">
.box {
  border-radius: 5px;
  box-shadow: 0 0 2px 1px #F44336;
  padding: 0 1rem 1rem;
}

.header {
  padding: .5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.header>span{
  width: .5rem;
  height: .2rem;
  background-color: #FB8C00;
  margin: 0 1rem;
}


</style>