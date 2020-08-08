<template>
  <v-card  class="mycard" :elevation="5" color="rgba(255,255,255,.95)">
    <!-- 头像-用户名>群名称 时间--> 
    <v-card-title>
      <v-avatar color="indigo" size="24" class="myavatar">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-btn text class="groupname">{{username}}</v-btn>
      <v-icon class="from-group">mdi-chevron-right</v-icon>
      <v-btn text class="groupname">{{groupname}} </v-btn>
    </v-card-title>

    <!-- 内容 图片 --> 
    <v-card-text>
      <v-row>
        {{content}}
      </v-row>
      <v-carousel
        :hide-delimiters="onepic"
        :show-arrows="!onepic"
        height="auto"
        show-arrows-on-hover
        hide-delimiter-background
      >
        <v-carousel-item v-for="(pic,i) in pics" :key="i"
        :src="pic">
        </v-carousel-item>
      </v-carousel>

      <!-- tag话题 --> 
      <v-row class="topicarea">
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
      <v-text-field append-icon="mdi-send" label="评论" 
        v-show="replay" @click:append="sendreply"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon text @click="replay=!replay" large color="#5b5b5bdb">
        <v-icon>mdi-message-plus-outline</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data(){
    return{
      replay:false,
      morereply:false
    }
  },
  props:{
    username:String,
    groupname:String,
    content:String,
    time:String,
    topics:Array,
    replays:Array,
    pics:Array,
  },
  computed:{
    ismoreReply(){
      let replaylen = this.replays.length
      if (replaylen<4) {
        return false
      }
      return true
    },
    shortReplys(){
      var short=new Array()
      for (let index = 0; index < this.replays.length&&index<4; index++) {
        short[index]=this.replays[index]
      }
      return short
    },
    restReplys(){
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
    sendreply(){

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

.topicarea{
  padding-top: 0.8rem;
}
.v-chip{
  margin-right: 0.5rem;
}
.groupname{
  font-size: 1rem;
  margin: 0;
}
</style>