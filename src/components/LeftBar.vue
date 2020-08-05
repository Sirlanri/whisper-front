<template>
  <div>
    
    <v-navigation-drawer fixed stateless color="rgba(255,255,255,0.7)"
      v-model="leftdrawer" style="top:64px">
      <v-list>
        <v-list-item>
          <v-btn block text large @click="jumpto('mine')">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              我的
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block text large @click="jumpto('message')">
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              消息
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block text large @click="jumpto('group')">
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              群组
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block text large @click="jumpto('topic')">
            <v-list-item-icon>
              <v-icon>mdi-arrange-send-to-back</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              话题
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import store from "@/store/index"
export default {
  computed:{
    leftdrawer:{
      get:function(){
        return store.state.leftdrawer
      },
      set:function(){
      }
    },

  },

  methods:{
      jumpto(name){
        if (name=="message") {
          this.$router.push("/message")
          return
        }
        if (name=="group") {
          this.$router.push("/group")
          return
        }
        if (name=="topic") {
          this.$router.push("/topic")
          return
        }
        if (name=="mine") {
          this.$router.push("/mine")
          return
        }
      }
    }
  
  
}
</script>

<style scoped>
.v-btn:hover{
  background-color: rgba(255, 255, 255, 0.80);
  border-radius: 20px 20px;
  transition: 0.3s;
}
.v-btn{
  transition: 0.5s;
}
</style>