<template>
<v-col cols="10" offset="1" offset-md="0" md="6" >
  <v-card>
    <v-row align-content="center">
      <v-col cols="6">
          <v-avatar size="36">
            <v-img src="https://pic2.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg"></v-img>
          </v-avatar>
          回复人昵称
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
          回复的内容
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
      haveRead:false
    }
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