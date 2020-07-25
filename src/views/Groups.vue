<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      <v-col>
        <v-row>
          <groupcard></groupcard>
          <groupcard></groupcard>
          <groupcard></groupcard>
          <groupcard></groupcard>
          <groupcard></groupcard>
          <groupcard></groupcard>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import groupcard from "@/components/GroupCard.vue";
export default {
  components: {
    groupcard,
  },
};
</script>

<style>
</style>