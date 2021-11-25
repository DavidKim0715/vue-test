<template>
  <section>
    <h2>Login</h2>
    <form class="login_wrap" @submit.prevent="submitAuth">
      <LoginInput @user-info="getUserInfo"/>
      <div class="btn_login_register_wrap" >
        <CommonButton
          msg="로그인"
          type="submit"
          @click="submitAuth"
        />
        <CommonButton
          msg="가입하기"
        />
      </div>
    </form>
  </section>
</template>

<script>

import { computed, defineComponent, reactive, toRefs } from "vue";
import { createNamespacedHelpers } from 'vuex';
const { mapGetters, mapMutations } = createNamespacedHelpers("service");

import LoginInput from "../../components/input/LoginInput";
import CommonButton from "../../components/button/CommonButton";


const SignInPage = defineComponent({
  name: "SignInPage",
  components : { CommonButton, LoginInput  },
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

    const userInfo = null

    // computed
    // method

    const submitAuth = (data) => {
      return 0
    }

    const getUserInfo = (info) =>{
      this.userInfo = info
      return

    }
    //life-cycle
    return { submitAuth, getUserInfo }
  }
})
export default SignInPage
</script>
