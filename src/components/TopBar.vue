<template>
  <v-card>
    <v-app-bar 
      fixed >
      <v-app-bar-nav-icon @click="changDrawer"></v-app-bar-nav-icon>
      <v-btn outlined>
        <v-icon>mdi-account-circle</v-icon>
        用户名
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-plus-circle</v-icon></v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
import store from "@/store/index"
export default {
  methods:{
    changDrawer(){
      store.commit('changeDrawer')
    }
  }
}
</script>

<style>

</style>