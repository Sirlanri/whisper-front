<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      <v-col md="8" sm="10" offset-md="2" offset-lg="1" offset-sm="1">
        <v-tabs centered grow>
          <v-tab>回复</v-tab>
          <v-tab>私信</v-tab>
        </v-tabs>
        <router-view></router-view>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>