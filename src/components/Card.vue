<template>
  <v-card  class="mycard" :elevation="5">
    <v-card-title>
      <v-avatar color="indigo" size="24" class="myavatar">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-btn text class="groupname">{{username}}</v-btn>
      <v-icon class="from-group">mdi-chevron-right</v-icon>
      <v-btn text class="groupname">{{groupname}} </v-btn>
    </v-card-title>

    <v-card-text>
      <v-row>
        {{content}}
      </v-row>
      <v-row class="topicarea">
        <v-chip outlined v-for="(topic,index) in topics" :key="index">
          {{topic}}
        </v-chip>
        
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
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
    topics:Array,
    replays:Array,
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
    }
  },
  methods:{
    sendreply(){

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
  padding-top: 0.5rem; 
}
.v-chip{
  margin-right: 0.5rem;
}
.groupname{
  font-size: 1rem;
  margin: 0;
}
</style>