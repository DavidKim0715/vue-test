<template>
  <Header />
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<script lang="ts">
import Header from "@/components/common/layout/Header.vue";
import Footer from "@/components/common/layout/Footer.vue";
import MenuBar from "@/components/common/layout/NavBar.vue";
import NavBar from "@/components/common/layout/NavBar.vue";
export default {
  name : 'AppLayoutDefault',
  components : {
    NavBar,
    Footer,
    Header
  }
}
</script>
