<template>
  <nav>
    <ul class="nav-box">
      <li class="nav-item">
        <router-link class="nav-link" to="/myInfo">내 정보</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/config">설정</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signIn">로그인</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { defineComponent } from "vue";
const NavBar = defineComponent({
  name : "NavBar",
})
export default NavBar
</script>
<style lang="scss" scoped>
</style>
