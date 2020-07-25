<template>
  <div class="home">
    <topbar></topbar>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import topbar from "@/components/TopBar.vue"

export default {
  name: 'Home',
  components: {
    topbar,
    
  }
}
</script>
