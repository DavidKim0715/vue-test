<template>
  <Header />
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import MenuBar from "@/components/layout/NavBar.vue";
import NavBar from "@/components/layout/NavBar.vue";
export default {
  name : 'AppLayoutDefault',
  components : {
    NavBar,
    Footer,
    Header
  }
}
</script>
