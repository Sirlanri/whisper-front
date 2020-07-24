<template>
  <v-card min-width="300px" class="mycard" >
    <v-card-title>
      <v-avatar color="indigo" size="24" class="myavatar">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
      <v-btn text class="groupname">用户名</v-btn>
      <v-icon class="from-group">mdi-chevron-right</v-icon>
      <v-btn text class="groupname">群组名称</v-btn>
    </v-card-title>

    <v-card-text>
      <v-row>
        这里是内容区域
      </v-row>
      <v-row class="topicarea">
        <v-chip outlined>
          话题1
        </v-chip>
        <v-chip outlined>
          话题2
        </v-chip>
      </v-row>
    </v-card-text>
    <v-divider></v-divider>
    <v-card-subtitle>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
      <v-row>第一个评论</v-row>
    </v-card-subtitle>
    <v-btn
      block
      text
      @click="morereply = !morereply"
    >
      <v-icon>{{ morereply ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
    </v-btn>
    <v-expand-transition>
      <v-card-subtitle v-show="morereply">
        <v-row>多余的评论</v-row>
      </v-card-subtitle>
    </v-expand-transition>
    
    <v-card-actions>
      
      <v-text-field append-icon="mdi-send" label="评论" 
        v-show="replay" @click:append="sendreply"></v-text-field>
      <v-spacer></v-spacer>
      <v-btn text @click="replay=!replay" large color="#5b5b5bdb">
        <v-icon>mdi-message-plus-outline</v-icon>
      </v-btn>
      
      <v-btn text large color="#5b5b5bdb">
        <v-icon>mdi-thumb-up-outline</v-icon>
        20
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
  methods:{
    sendreply(){

    }
  }
}
</script>

<style scoped>
.mycard{
  margin: 30px 0;
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