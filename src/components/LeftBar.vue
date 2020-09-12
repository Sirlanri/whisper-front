<template>
  <div>
    
    <v-navigation-drawer fixed stateless color="rgba(255,255,255,0.7)"
      v-model="leftdrawer" style="top:64px" width="220px">
      <v-list>
        <v-list-item v-if="islogin">
          <v-btn block text large @click="jumpto('mine')" >
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content >
              我的
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item  v-else>
          <v-btn block text large @click="dialog=!dialog">
            <v-list-item-icon>
              <v-icon>mdi-account-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              登录/注册
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
        <v-list-item>
          <v-btn block text large @click="jumpto('about')">
            <v-list-item-icon>
              <v-icon>mdi-information-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              关于
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>

    <v-dialog v-model="dialog" max-width="800">
      <v-card width="100%">
        <v-row>
          <v-col cols="10" offset="1">
            <v-card-title>登录/注册</v-card-title>
            <v-tabs centered grow>
              <v-tab @click="loginwindow=true">登录</v-tab>
              <v-tab @click="loginwindow=false">注册</v-tab>
            </v-tabs>
          </v-col>
          <v-card-text>
            <v-col cols="10" offset="1" v-if="loginwindow">
              <v-text-field label="邮箱" v-model="email"></v-text-field>
              <v-text-field label="密码" type="password" v-model="password"></v-text-field>
            </v-col>
            <v-col cols="10" offset="1" v-if="!loginwindow">
              <v-text-field label="昵称" v-model="nickname"></v-text-field>
              <v-text-field label="邮箱" v-model="email"></v-text-field>
              <v-text-field label="密码" type="password" v-model="password"></v-text-field>
            </v-col>
            <v-row>
              <v-spacer></v-spacer>
              <v-btn outlined large color="primary" style="margin-right:2rem" @click="dialog=false">取消</v-btn>
              <v-btn color="primary" large v-show="loginwindow" @click="goLogin">登录</v-btn>
              <v-btn color="primary" large v-show="!loginwindow" @click="goRegist">注册</v-btn>
            </v-row>
          </v-card-text>
          
        </v-row>
        

      </v-card>
    </v-dialog>

    <v-snackbar
      v-model="resultWin">
      {{ result }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="resultWin = false"
        >
          OK
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import store from "@/store/index"
export default {
  data(){
    return{
      dialog:false,
      loginwindow:true,
      //登录，注册信息
      email:"",
      password:"",
      nickname:"",
      resultWin:false,
      result:""
    }
  },
  computed:{
    leftdrawer:{
      get:function(){
        return store.state.leftdrawer
      },
      set:function(){
      }
    },

    //登录，返回true
    islogin(){
      let power = this.$store.state.userData.power
      if (power=="visitor") {
        return false
      }else{
        return true
      }
    }

  },

  methods:{
    //登录后调用此函数，获取用户信息
    getUserInfo(){
      this.axios.get('getUserInfo')
      .then(res=>{
        if (res.status==200) {
          this.$store.commit('setUserData',res.data)
        }else{
          this.result="获取用户信息失败"
          this.resultWin=true
        }
      })
    },
    //登录
    goLogin(){
      this.axios.post('login',{
        mail:this.email,
        password:this.password
      }).then(res=>{
        if (res.status==200) {
          this.getUserInfo()
          this.result="登录成功"
          this.resultWin=true
          this.dialog=false
        }
        if (res.status==201) {
          this.getUserInfo()
          this.result="欢迎管理员登录~"
          this.resultWin=true
          this.dialog=false
        }else{
          this.result=res.data
          this.resultWin=true
        }
      })
      
    },
    goRegist(){
      this.axios.post('regist',{
        name:this.nickname,
        password:this.password,
        mail:this.email
      }).then(res=>{
        if (res.status==200) {
          this.result=res.data
          this.resultWin=true
          this.dialog=false
          return
        }
        if (res.status==201) {
          this.result=res.data
          this.resultWin=true
          return
        }
        if (res.status==202) {
          this.result=res.data
          this.resultWin=true
          return
        }
      })
    },
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
      if (name=="about") {
        this.$router.push("/about")
        return
      }
    }
  }
  
  
}
</script>

<style scoped>
.v-list-item .v-btn:hover{
  background-color: rgba(255, 255, 255, 0.80);
  border-radius: 20px 20px;
  transition: 0.3s;
}
.v-list-item .v-btn{
  transition: 0.5s;
}
.row{
  margin: 0;
}
</style>