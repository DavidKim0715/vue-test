<template>
  <NavBar />
  <slot />
</template>

<script>
import NavBar from "../components/layout/NavBar";
import Header from "../components/layout/Header";
export default {
  name: "AppLayoutEmpty",
  components : { NavBar }
}
</script>
