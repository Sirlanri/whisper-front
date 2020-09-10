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

  <v-snackbar
    v-model="resultWin"
  >
    {{ result }}
    <template v-slot:action="{ attrs }">
      <v-btn
        color="blue"
        text
        v-bind="attrs"
        @click="resultWin = false"
      >
        知道了
      </v-btn>
    </template>
  </v-snackbar>
</v-col>
</template>

<script>
export default {
  data(){
    return{
      result:"",
      resultWin:false,
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
      this.axios.get('readMsg',{
        params:{id:this.id}
      }).then(res=>{
        if (res.status==200) {
          this.result="已标为已读"
          this.haveRead=true
        }else{
          this.result=res.data
        }
        this.resultWin=true
      })
      
    }
  }
};
</script>

<style scoped>
.v-avatar{
  margin: 0 1rem;
}
</style>