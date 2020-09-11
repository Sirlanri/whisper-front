<template>
  <v-card  class="mycard" :elevation="5" color="rgba(255,255,255,.7)">
    <!-- 头像-用户名>群名称 时间--> 
    <v-card-title>
      <v-avatar color="indigo" size="40" class="myavatar">
        <v-img :src="avatar"></v-img>
      </v-avatar>
      <v-btn text class="groupname">{{username}}</v-btn>
      <v-icon class="from-group" v-if="groupname!=''">mdi-chevron-right</v-icon>
      <v-btn text class="groupname">{{groupname}} </v-btn>
    </v-card-title>

    <!-- 内容 图片 --> 
    <v-card-text>
      <v-row class="content-area">
        {{content}}
      </v-row>
      <v-carousel
        :hide-delimiters="onepic"
        :show-arrows="!onepic"
        height="auto"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item v-for="(pic,i) in pics" :key="i" class="pic-area"
        :src="pic">
        </v-carousel-item>
      </v-carousel>

      <!-- tag话题 --> 
      <v-row>
        <v-chip outlined v-for="topic in topics" :key="topic" @click="clickTag">
          {{topic}}
        </v-chip>
        <v-spacer></v-spacer>
        {{time}}
      </v-row>
      
    </v-card-text>
    <v-divider></v-divider>

    <!-- 评论区 --> 
    <v-card-subtitle style="padding-bottom:0">
      <v-row align-content="center" 
        v-for="(replay,index) in shortReplys" :key="index">
         <v-avatar size="20">
          <img
            :src="replay.imgsrc"
          >
        </v-avatar>
        {{replay.name}}：{{replay.content}}
      </v-row>

    <!-- 可折叠的更多评论 --> 
    </v-card-subtitle>
    <v-expand-transition>
      <v-card-subtitle v-if="morereply" style="padding-top:0">
        <v-row v-for="(replay,index) in restReplys" :key="index" align-content="center">
          <v-avatar size="20">
            <img
            :src="replay.imgsrc"
          >
          </v-avatar>
        {{replay.name}}：{{replay.content}}
        </v-row>
      </v-card-subtitle>
    </v-expand-transition>
    <v-btn
      block
      text
      v-if="ismoreReply"
      @click="morereply = !morereply"
    >
      <v-icon>{{ morereply ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>

    <!-- 发表新评论 --> 
    <v-card-actions>
      <v-text-field append-icon="mdi-send" label="评论" v-model="replyContent"
        v-show="replay" @click:append="sendReply"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon text @click="replay=!replay" large color="#5b5b5bdb">
        <v-icon>mdi-message-plus-outline</v-icon>
      </v-btn>
    </v-card-actions>
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
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      replay:false,
      morereply:false,
      replyContent:"",
      result:"",
      resultWin:false
    }
  },
  props:{
    avatar:String,
    username:String,
    groupname:String,
    content:String,
    time:String,
    topics:Array,
    replays:Array,
    pics:Array,
    postid:Number
  },
  computed:{
    ismoreReply(){
      if (this.replays==undefined) {
        return false
      }
      let replaylen = this.replays.length
      if (replaylen<=4) {
        return false
      }
      return true
    },
    shortReplys(){
      if (this.replays==undefined) {
        return 
      }
      var short=new Array()
      for (let index = 0; index < this.replays.length&&index<4; index++) {
        short[index]=this.replays[index]
      }
      return short
    },
    restReplys(){
      if (this.replays==undefined) {
        return 
      }
      var rest = new Array()
      for (let index = 4; index < this.replays.length; index++) {
        rest[index-4]=this.replays[index]
      }
      return rest
    },
    onepic(){
      if (this.pics==undefined) {
        return false
      }
      if (this.pics.length==1) {
        return true
      }else{
        return false
      }
    }
  },
  methods:{
    //发送评论
    sendReply(){
      let sendData={
        id:this.postid,
        content:this.replyContent,
        name:this.username
      }
      this.axios.post('newReply',sendData)
        .then(res=>{
          if (res.status==200) {
            this.replyContent=""
          }
          this.result=res.data
          this.resultWin=true
        })
    },
    clickTag(tag){
      let name=tag.target.textContent
      this.$emit("tagname",name)
    }
  }
}
</script>

<style scoped>
.mycard{
  margin:30px 0;
  padding: 0 1rem;

}
.v-btn{
  text-transform: none;
}
.pic-area{
  padding-bottom: 0.8rem;
}
.v-chip{
  margin-right: 0.5rem;
}
.groupname{
  font-size: 1rem;
  margin: 0;
}
.wwww{
  color: #3b3b3b;
  color: #0041bb;
}
.content-area{
  padding-bottom: 0.8rem;
}
</style>