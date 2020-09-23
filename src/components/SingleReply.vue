<template>
<v-col cols="12" sm="6" offset-sm="0"  >
  <v-card>
    <v-row align-content="center">
      <v-col cols="6">
          <v-avatar size="36">
            <v-img :src="avatar"></v-img>
          </v-avatar>
          {{name}}
      </v-col>
      <v-col cols="4" offset="2">
        <v-menu >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="groupDelDialog=true">
            <v-list-item-title>删除此回复</v-list-item-title>
          </v-list-item>
        </v-list>
        
      </v-menu>
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
      <v-spacer></v-spacer>
      
      <v-btn @click="replyWin=true" class="replyBtn">回复</v-btn>
      
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

  <v-dialog v-model="groupDelDialog" max-width="500">
    <v-card>
      
        <v-card-title>
          删除确认
        </v-card-title>
        <v-card-text>
          将会删除这条回复
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn outlined large @click="groupDelDialog=false">取消</v-btn>
          <v-btn color="error" large @click="delReply" :disabled="btndis">删除</v-btn>
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
      btndis:false,
      groupDelDialog:false
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
    delReply(){
      this.btndis=true
      this.axios.get('delReply',{
        params:{id:this.id}
      }).then(res=>{
        if (res.status==200) {
          this.groupDelDialog=false
          this.result=res.data
          this.resultWin=true
        }else{
          this.result=res.data
          this.resultWin=true
        }
        this.btndis=false
      })
    },
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
          }
        }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
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
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
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
.replyBtn{
  position: absolute;
  right: 10px;
  bottom: 20px;
}
</style>