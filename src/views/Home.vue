<template>
  <div class="home">
    <topbar></topbar>
    <mainarea></mainarea>
  </div>
</template>

<script>
// @ is an alias to /src
import topbar from "@/components/TopBar.vue"
import mainarea from "@/views/MainArea.vue"
export default {
  name: 'Home',
  components: {
    topbar,
    mainarea
  }
}
</script>
