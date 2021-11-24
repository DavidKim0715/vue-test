<template>
  <section>
    <h2>Login</h2>
    <LoginInput />
  </section>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapMutations } = createNamespacedHelpers('service');

import LoginInput from "../../components/input/LoginInput";

const SignInPage = defineComponent({
  name: "SignInPage",
  components : { LoginInput },
  props :{},
  computed: {
    ...mapGetters({
      getUser : 'getUser',
      getToken : 'getToken'
    }),
  },
  methods :{
    ...mapMutations({
      setUser: 'setUser',
      setToken : 'setToken'
    }),
  },
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })

    // computed
    // method
    const checkAuth = () =>{
      return ;
    }
    //life-cycle
    return { }
  }
})
export default SignInPage
</script>

<style scoped>

</style>
