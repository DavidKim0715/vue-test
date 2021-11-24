<template>
  <section>
    <h2>Login</h2>
    <LoginInput />
  </section>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";
import LoginInput from "../../components/input/LoginInput";

const SignInPage = defineComponent({
  name: "SignInPage",
  components : { LoginInput },
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
