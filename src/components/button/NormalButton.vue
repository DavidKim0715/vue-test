<template>
  <button type="submit" class="btn_normal">
    <span class="btn_text" @click="onSubmitClick">{{msg}}</span>
  </button>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";

const NormalButton = defineComponent({
  name: "NormalButton",
  components : {  },
  props :{
    msg : String,
  },
  emits : {},
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })
    //methods
    const onSubmitClick= () => {
      alert('로그인에 실패하였습니다')
    }
    //computed

    //life-cycle
    return {onSubmitClick} // template에 사용될 getter
  }
})
export default NormalButton
</script>

<style scoped>

</style>
