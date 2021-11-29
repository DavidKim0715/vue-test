<template>
  <template
    v-for="(item, idx) in items"
    :key="idx"
  >
    <router-link :to="item.url">
      <img alt="item.desc" :src="item.src"/>
    </router-link>
  </template>
  <DirectionBox />
</template>

<script>
import { defineComponent, reactive } from "vue";
import DirectionBox from "../box/DirectionBox";

const CarouselBar = defineComponent({
  name: "CarouselBar",
  components : { DirectionBox },
  props:{
    items : Object
  },
  setup(props){


    return {}
  }
})
export default CarouselBar
</script>
