<template>
  <form class="panel_wrap">
    <div class="panel_inner">
      <div class="id_pw_wrap">
        <input class="id_line"/>
        <input class="pw_line"/>
      </div>
      <div class="login_keep_wrap">

      </div>
      <div class="btn_login_wrap">
        <button>로그인</button>
      </div>
    </div>
  </form>
</template>

<script>

import { defineComponent } from "vue";

const CommonInput = defineComponent({
  name: "CommonInput",
  components : {},
})
export default CommonInput
</script>
