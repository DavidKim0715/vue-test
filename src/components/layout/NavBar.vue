<template>
  <nav>
    <ul class="nav-box">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/myInfo">MyPage</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/config">Configuration</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/signIn">Login</router-link>
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
