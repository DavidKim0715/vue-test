<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from "vue";
import { createNamespacedHelpers } from 'vuex';
import LoginField from "@/components/scoped/input/LoginField.vue";
import LoginSubmitButton from "@/components/scoped/button/LoginSubmitButton.vue";
import { IUserLogin } from "@/views/login/index";
const { mapGetters, mapActions } = createNamespacedHelpers("auth");

const SignInPage = defineComponent({
  name: "SignInPage",
  components : { LoginSubmitButton, LoginField },
  props :{},
  computed: {
    ...mapGetters({
      getLoginStatus : 'getLoginStatus'
    }),
  },
  methods :{
    ...mapActions({
      actionLogin : 'LOGIN',
    }),
  },
  setup(props){
    //variables
    let userInfo : IUserLogin = {}

    const getUserInfo = (info : IUserLogin) =>{
      userInfo = info
    }
    const submitLogin = async () =>{
      // await this.actionLogin(userInfo)
      // if(this.getLoginStatus === 'success'){
      //   window.alert('로그인에 성공하셨습니다')
      // }else{
      //   window.alert('로그인에 실패하셨습니다')
      // }
    }
    //life-cycle
    return { userInfo, getUserInfo, submitLogin}
  }
})
export default SignInPage
</script>
<template>
  <section class="login">
    <h3>Login</h3>
    <form class="login_wrap" @submit.prevent="submitLogin">
      <LoginField @user-info="getUserInfo"/>
    </form>
    <login-submit-button />
  </section>
</template>
