<template>
  <div>
    
    <v-navigation-drawer fixed stateless
      v-model="leftdrawer" style="top:64px">
      <v-list>
        <v-list-item @click="jumpto('message')">
          <v-btn block text large>
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              消息
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item @click="jumpto('group')">
          <v-btn block text large>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              群组
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item @click="jumpto('topic')">
          <v-btn block text large>
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
      }
    }
  
  
}
</script>

<style>

</style>