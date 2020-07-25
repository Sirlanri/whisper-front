<template>
  <div class="home">
    <topbar></topbar>
    <div class="whitearea"></div>
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

<style>
.whitearea{
  height: 60px;
}
</style>