<template>
  <header>
    <router-link to="/">
      <img src="@/assets/logo.png" alt="this is page header" />
    </router-link>

  </header>
</template>

<script>
import { computed, defineComponent } from "vue";

const Header = defineComponent({
  name: "Header",
  components : {  },
  props :{},
  emits : {},
  setup(props){
    //variables
    const event = computed(()=>{
      return 0
    })
    //methods
    const onClickLogo = () => {
      return
    }
    //computed

    //life-cycle
    return {onClickLogo}
  }
})
export default Header
</script>
