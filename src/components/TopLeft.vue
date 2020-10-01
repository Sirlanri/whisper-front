<template>
  <div>
    <v-card>
    <v-app-bar color="rgba(255,255,255,0.7)" 
      fixed >
      
      <v-app-bar-nav-icon @click="leftDrawer=!leftDrawer"></v-app-bar-nav-icon>
      <v-btn outlined @click="goHome" class="btnmargin">
        <v-icon>mdi-home</v-icon>
        首页
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="openPostWin" v-if="isLogin"><v-icon>mdi-pencil-plus-outline</v-icon></v-btn>
      <v-menu >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list v-if="isLogin">
          <v-list-item @click="groupDialog=!groupDialog">
            <v-list-item-title>创建群</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logoutWin=!logoutWin">
            <v-list-item-title>注销登录</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
        <v-list>
          <v-list-item @click="switchPartical">
            <v-list-item-title>
              粒子背景开关
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-card>

  <v-navigation-drawer fixed  color="rgba(255,255,255,0.7)"
      v-model="leftDrawer" style="top:64px" width="220px">
      <v-list>
        <v-list-item v-if="isLogin">
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
          <v-btn block text large @click="loginDialog=!loginDialog">
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

    <v-dialog v-model="loginDialog" max-width="800">
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
              <v-btn outlined large color="primary" style="margin-right:2rem" @click="loginDialog=false">取消</v-btn>
              <v-btn color="primary" large v-show="loginwindow" @click="goLogin" :disabled="btndis">登录</v-btn>
              <v-btn color="primary" large v-show="!loginwindow" @click="goRegist" :disabled="btndis">注册</v-btn>
            </v-row>
          </v-card-text>
          
        </v-row>
        

      </v-card>
    </v-dialog>

  <v-dialog v-model="dialog" max-width="1000px">
    <v-card>
      <v-card-title>新随笔</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-textarea outlined label="随笔内容（不得超过256字哦）" 
            v-model="content" counter :rules="areaRules" clearable>
            </v-textarea>
          </v-col>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-file-input
              v-model="pics"
              id="pics"
              color="deep-purple accent-4"
              counter
              label="图片"
              multiple
              prepend-icon="mdi-image"
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >
                  +{{ pics.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-autocomplete
              clearable
              v-model="selectGroup"
              :items="groupNames"
              
              label="要发布的群名称"
            ></v-autocomplete>
          </v-col>
          <v-col cols="12" offset="0" md="10" offset-md="1">
             <v-combobox
              v-model="selectTag"
              :items="tags"
              label="选择或创建标签，用回车键入"
              multiple
              chips
            ></v-combobox>
          </v-col>
        </v-row>

        <v-row>
          <v-spacer></v-spacer>
          <v-btn class="btnmargin" outlined color="error" large @click="dialog=false">放弃</v-btn>
          <v-btn class="btnmargin" color="primary" :disabled="btndis" large @click="uploadPic">发布</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="groupDialog" max-width="1000px">
    <v-card>
      <v-card-title>创建一个群</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-text-field label="群名称" v-model="groupname"></v-text-field>
          </v-col>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-textarea outlined label="群组介绍" v-model="groupintro"></v-textarea>
          </v-col>
          <v-col cols="12" offset="0" md="10" offset-md="1">
            <v-file-input show-size counter label="背景图" v-model="groupPic"></v-file-input>
          </v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="btnmargin" outlined color="error" large @click="groupDialog=false">放弃</v-btn>
            <v-btn class="btnmargin" color="primary" large :disabled="btndis" @click="uploadGroupPic">创建</v-btn>
          </v-row>

        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
  <v-dialog v-model="logoutWin" max-width="300">
    <v-card>
      <v-card-title>确认注销？</v-card-title>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn outlined @click="logoutWin=!logoutWin">取消</v-btn>
        <v-btn color="error" @click="logout">注销</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
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
  </div>
</template>

<script>
export default {
data(){
    return{
      groupPic:null,
      btndis:false,
      logoutWin:false,
      result:"",
      resultWin:false,
      areaRules:[v => v.length <= 256 || '字数超过限制'],
      groupDialog:false,
      groupname:"",
      groupintro:"",
      dialog:false,
      content:"",
      pics:[],
      selectGroup:"",
      selectTag:[],
      groupNames:[
        "获取群列表失败",
      ],
      tags:[
        "获取标签列表失败"
      ],
      //图片上传之后，返回的图片URL列表
      picUrls:[],

      leftDrawer:null,

      //左侧栏
      loginDialog:false,
      loginwindow:true,
      //登录，注册信息
      email:"",
      password:"",
      nickname:"",
    }
  },
  methods:{
    //控制粒子背景开关
    switchPartical(){
      this.$store.commit('changeParticle')
    },
    newGroup(picurl){
      let sendData={
        name:this.groupname,
        intro:this.groupintro,
        pic:picurl
      }
      this.axios.post('newGroup',sendData)
      .then(res=>{
        if (res.status==200) {
          //清除原内容
          this.groupname=""
          this.groupintro=""
          this.groupPic=null

          this.groupDialog=false
          this.result=res.data
          this.resultWin=true
          this.btndis=false
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    uploadGroupPic(){
      this.btndis=true
      var file = this.groupPic
      let formData = new FormData()
      formData.append("img",file)
      this.axios.post('uploadPics',formData,{
        headers:{'Content-Type':'multipart/form-data'}
      }).then(res=>{
        if (res.status==200) {
          this.newGroup(res.data)
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    openPostWin(){
      this.dialog=true
      this.getGroups()
      this.getTags()
    },
    getTags(){
      this.axios.get('getTags')
      .then(res=>{
        if (res.status==200) {
          this.tags=res.data.tags
        }
      })
    },
    getGroups(){
      this.axios.get('getGroupNames')
      .then(res=>{
        if (res.status==200) {
          this.groupNames=res.data.groups
        }
      })
    },
    newPost(){
      let after=this.content.replace(/[\n\r]/g,"<br>")
      let sendData={
        content:after,
        pics:this.picUrls,
        group:this.selectGroup,
        tags:this.selectTag
      }
      this.axios.post('newPost',sendData)
      .then(res=>{
        if (res.status==200) {
          this.result="发布成功"
          this.resultWin=true
          this.dialog=false
          this.btndis=false
          //修改flag，让瀑布流刷新
          this.$store.commit('refresh')
          //将post的内容全部清空
          this.content=""
          this.picUrls=[]
          this.selectGroup=""
          this.selectTag=[]
        }
        this.resultWin=true
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    uploadPic(){
      this.btndis=true
      let len = this.pics.length
      if (len==0) {
        this.newPost()
        return
      }
      var index = 0
      this.pics.forEach(ele => {
        
        var file = ele
        let formData = new FormData()
        formData.append("img",file)
        this.axios.post('uploadPics',formData,{
          headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
          if (res.status==200) {
            this.picUrls[index]=(res.data)
            index++
            if (len==index) {
              this.newPost()
              return
            }
          }else{
            this.result="上传图片失败"+res.data
            this.resultWin=true
            return
          }
        }).catch(res=>{
          this.btndis=false
          this.result=res.response.data
          this.resultWin=true
      })
      });
      
    },
    logout(){
      this.axios.get('logout')
      .then(res=>{
        this.result=res.data
        if (res.status==200) {
          this.$store.commit('changePower','visitor')
        }
        this.resultWin=true
        this.logoutWin=false
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    goHome(){
      this.$router.push('/')
    },
    changDrawer(){
      this.$store.commit('changeDrawer')
    },
    customFilter (item, queryText) {
      const textOne = item.name.toLowerCase()
      const searchText = queryText.toLowerCase()
      return textOne.indexOf(searchText) > -1 
    },

    //左侧栏部分

    //登录后调用此函数，获取用户信息
    getUserInfo(){
      this.axios.get('getUserInfoByCookie')
      .then(res=>{
        if (res.status==200) {
          this.$store.commit('setUserData',res.data)
        }else{
          this.result="获取用户信息失败"
          this.resultWin=true
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    //登录
    goLogin(){
      this.btndis=true
      this.axios.post('login',{
        mail:this.email,
        password:this.password
      }).then(res=>{
        if (res.status==200) {
          this.btndis=false
          this.getUserInfo()
          this.result="登录成功"
          this.resultWin=true
          this.loginDialog=false
        }
        if (res.status==201) {
          this.btndis=false
          this.getUserInfo()
          this.result="欢迎管理员登录~"
          this.resultWin=true
          this.loginDialog=false
        }else{
          this.btndis=false
          this.result=res.data
          this.resultWin=true
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
      
    },
    goRegist(){
      this.btndis=true
      this.axios.post('regist',{
        name:this.nickname,
        password:this.password,
        mail:this.email
      }).then(res=>{
        if (res.status==200) {
          this.btndis=false
          this.result=res.data
          this.resultWin=true
          this.loginDialog=false
          return
        }
        if (res.status==201) {
          this.btndis=false
          this.result=res.data
          this.resultWin=true
          return
        }
        if (res.status==202) {
          this.btndis=false
          this.result=res.data
          this.resultWin=true
          return
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
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
    },
  

    
  },
  computed:{
    isLogin(){
      return this.$store.getters.isLogin
    }
  }
}
</script>

<style scoped>
.btnmargin{
  margin: 0 1rem;
}
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