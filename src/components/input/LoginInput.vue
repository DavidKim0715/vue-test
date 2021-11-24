<template>
  <form class="login_wrap" @submit="onClickSubmit">
    <ul class="id_pw_wrap">
      <li>
        <span>id</span>
        <input class="id_line" v-model="userId" placeholder="username"/>
      </li>
      <li>
        <span>password</span>
        <input class="pw_line" v-model="pwd" placeholder="password"/>
      </li>
    </ul>
    <div class="btn_login_wrap">
      <NormalButton msg="로그인" />
    </div>
  </form>
</template>

<script>
import { computed, defineComponent } from "vue";
import NormalButton from "../button/NormalButton";

const LoginInput = defineComponent({
  name: "LoginInput",
  components : { NormalButton },
  props :{},
  emits : {},
  setup(props){
    //variables
    const userId = ''
    const pwd = ''
    const event = computed(()=>{
      return 0
    })
    //methods
    const onClickSubmit = () => {
      return 0
    }
    //computed

    //life-cycle
    return {onClickSubmit, userId, pwd} // template에 사용될 getter
  }
})
export default LoginInput
</script>
