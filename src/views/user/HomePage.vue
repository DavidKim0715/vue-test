<template>
  <section>
    <h2>홈페이지입니다</h2>
    <SwiperTab />
  </section>
</template>

<script lang="ts">
import { defineComponent, ref,
  reactive,
  computed,
  toRefs,
  watch,
  onMounted,
  onBeforeMount,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import { useStore } from "vuex";
import SwiperTab from "@/components/tab/SwiperTab.vue"; // @ is an alias to /src
interface Pagination {
  currentPage: number
  totalPage: number
}
const state = reactive<Pagination>({
  currentPage: 1,
  totalPage: 0
})

const HomePage = defineComponent({
  name : 'HomePage',
  components:{
    SwiperTab

  },
})
export default HomePage
</script>
