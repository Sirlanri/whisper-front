<template>
  <v-card min-width="300px" class="mycard">

    <v-card-text>
      这里是内容区域
    </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
    </v-card-subtitle>
    
    <v-card-actions>
      
      <v-text-field label="评论" v-show="replay"></v-text-field>
      <v-btn icon v-show="replay">
        <v-icon>mdi-send</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="replay=!replay">
        <v-icon>mdi-message-plus-outline</v-icon>
      </v-btn>
      
      <v-btn icon>
        <v-icon>mdi-thumb-up-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      replay:false
    }
  }
}
</script>

<style>
.mycard{
  margin: 30px 0;
  padding: 0 1rem;
}
</style>