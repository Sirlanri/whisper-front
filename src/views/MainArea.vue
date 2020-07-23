<template>
  <div>
    <div class="whitearea"></div>
    <v-row >
      <v-col cols="4">
        <div class="flex-column">
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="flex-column">
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
        </div>
      </v-col>
      <v-col cols="4">
        <div class="flex-column">
          <card></card>
          <card></card>
          <card></card>
          <card></card>
          <card></card>
        </div>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import card from "@/components/Card.vue"
export default {
  components:{
    card
  },
  data(){
    return{
      cardsData:[
        {
          detail:'第一条信息的内容',

        }
      ]
    }
  }
}
</script>

<style>
.whitearea{
  height: 60px;
}
</style>