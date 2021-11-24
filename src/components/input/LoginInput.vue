<template>
  <form class="login_wrap" @submit.prevent="login">
    <div class="id_pw_wrap">
      <span>
        id
        <input class="id_line" v-model="username" placeholder="username"/>
      </span>
      <span>
        password
        <input class="pw_line" v-model="password" placeholder="password"/>
      </span>
    </div>


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
  components : { NormalButton  },
  props :{},
  emits : {},
  setup(props){
    //variables
    const uid = ''
    const pwd = ''
    const event = computed(()=>{
      return 0
    })
    //methods

    //computed

    //life-cycle
    return {} // template에 사용될 getter
  }
})
export default LoginInput
</script>
