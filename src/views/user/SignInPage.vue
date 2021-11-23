<template>
  <section>
    <h2>Login</h2>
    <CommonInput />
  </section>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";
import CommonInput from "../../components/input/CommonInput";

const SignInPage = defineComponent({
  name: "SignInPage",
  components : { CommonInput },
  props :{},
  emits : {},
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })
    //methods

    //computed

    //life-cycle
    return {}
  }
})
export default SignInPage
</script>

<style scoped>

</style>
