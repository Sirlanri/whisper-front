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
        <v-btn @click="replyWin=true">回复</v-btn>
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

  <v-dialog v-model="replyWin" max-width="500">
    <v-card>
      
        <v-card-title>
          回复消息
        </v-card-title>
        <v-card-text>
          <v-textarea
            label="输入你的回复"
            outlined
            rows="3"
            v-model="replyContent"
          ></v-textarea>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined large color="error" @click="replyWin=false">取消</v-btn>
          <v-btn color="primary" large @click="sendReply" :disabled="btndis">发送</v-btn>
        </v-card-actions>
      
    </v-card>
  </v-dialog>
</v-col>
</template>

<script>
export default {
  data(){
    return{
      result:"",
      resultWin:false,
      replyWin:false,
      replyContent:"",
      btndis:false
    }
  },
  props:{
    name:String,
    avatar:String,
    haveRead:Boolean,
    content:String,
    id:Number,
    postid:Number
  },
  methods:{
    sendReply(){
      this.btndis=true
      let sendData={
        id:this.postid,
        content:this.replyContent,
        name:this.name
      }
      this.axios.post('newReply',sendData)
        .then(res=>{
          if (res.status==200) {
            this.replyWin=false
            this.btndis=false
          }else{
            this.result=res.data
            this.resultWin=true
            this.btndis=false
          }
          
        })
    },
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