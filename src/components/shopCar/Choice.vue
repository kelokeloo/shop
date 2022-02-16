<template>
  <div @click="handleClick">
    <span class="iconfont icon-xuanze"
      :class="choice ? 'active' : ''"
    ></span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: 'choice'
})
</script>
<script setup lang="ts">
interface propApi {
  choice: boolean
}

const props = defineProps<propApi>()

const emit = defineEmits(['update:choice'])

const handleClick = ()=>{
  emit('update:choice', !props.choice)
}


</script>
<style scoped lang="scss">
.active {
  color: white;
  background-color: #E53935;
  border-radius: 9999px;
}


</style>