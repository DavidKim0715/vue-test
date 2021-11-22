<template>
  <nav>
    <ul>
      <li class="nav-item">
        <router-link class="nav-link" to="/">Home</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/myInfo">MyPage</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/config">Configuration</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>
