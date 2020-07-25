<template>
  <div class="home">
    <topbar></topbar>
    <leftbar></leftbar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import topbar from "@/components/TopBar.vue"
import leftbar from "@/components/LeftBar.vue"
export default {
  name: 'Home',
  components: {
    topbar,
    leftbar
  }
}
</script>
