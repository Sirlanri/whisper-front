<template>
  <div>
    <v-row>
      <v-col cols="6" >
        <reply></reply>
      </v-col>
      <v-col cols="6" >
        <reply></reply>
      </v-col>
      <v-col cols="6" >
        <reply></reply>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import reply from "@/components/SingleReply.vue"
export default {
  components:{
    reply
  }
}
</script>

<style>

</style>