<template>
<v-col cols="10" offset="1" offset-md="0" md="6" >
  <v-card>
    <v-row align-content="center">
      <v-col cols="6">
          <v-avatar size="36">
            <v-img :src="avatar"></v-img>
          </v-avatar>
          {{name}}
      </v-col>
      <v-col cols="2" offset="3">
        <v-btn icon large :color="haveRead?'':'blue'" @click="changRead">
          <v-icon>mdi-read</v-icon>
        </v-btn>
      </v-col>
      
    </v-row>

    <v-row>
      <v-col cols="9">
        <v-card-text>
          {{content}}
        </v-card-text>
      </v-col>
      <v-col cols="3">
        <v-btn>回复</v-btn>
      </v-col>
    </v-row>
    
  </v-card>
</v-col>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  props:{
    name:String,
    avatar:String,
    haveRead:Boolean,
    content:String,
    id:Number,
  },
  methods:{
    changRead(){
      this.haveRead=!this.haveRead
    }
  }
};
</script>

<style scoped>
.v-avatar{
  margin: 0 1rem;
}
</style>