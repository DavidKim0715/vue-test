<script lang="ts">
import { computed, defineComponent, reactive, toRefs } from "vue";

const LoginSubmitButton = defineComponent({
  name: "LoginSubmitButton",
  components : {  },
  props :{
  },
  emits : {},
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })
    //methods
    //computed

    //life-cycle
    return {  } // template에 사용될 getter
  }
})
export default LoginSubmitButton
</script>
<template>
  <button
    :type="type"
    class="btn_normal"
  >
    <span class="btn_text">{{  }}</span>
  </button>
</template>
