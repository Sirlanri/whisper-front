<template>
<div>
  <v-card>
    <v-app-bar color="rgba(255,255,255,0.7)" 
      fixed >
      
      <v-app-bar-nav-icon @click="changDrawer"></v-app-bar-nav-icon>
      <v-btn outlined @click="goHome" class="btnmargin">
        <v-icon>mdi-home</v-icon>
        首页
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="openPostWin" v-if="isLogin"><v-icon>mdi-plus-circle</v-icon></v-btn>
      <v-menu v-if="isLogin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="groupDialog=!groupDialog">
            <v-list-item-title>创建群</v-list-item-title>
          </v-list-item>
          <v-list-item @click="logoutWin=!logoutWin">
            <v-list-item-title>注销登录</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-card>

  <v-dialog v-model="dialog" max-width="1000px">
    <v-card>
      <v-card-title>新随笔</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="10" offset="1">
            <v-textarea outlined label="随笔内容（不得超过256字哦）" 
            v-model="content" counter :rules="areaRules">
            </v-textarea>
          </v-col>
          <v-col cols="10" offset="1">
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
          <v-col cols="10" offset="1">
            <v-autocomplete
              clearable
              v-model="selectGroup"
              :items="groupNames"
              
              label="要发布的群名称"
            ></v-autocomplete>
          </v-col>
          <v-col cols="10" offset="1">
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
          <v-btn class="btnmargin" color="primary" :disabled="btndisable" large @click="uploadPic">发布</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>

  <v-dialog v-model="groupDialog" max-width="1000px">
    <v-card>
      <v-card-title>创建一个群</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="10" offset="1">
            <v-text-field label="群名称" v-model="groupname"></v-text-field>
          </v-col>
          <v-col cols="10" offset="1">
            <v-textarea outlined label="群组介绍" v-model="groupintro"></v-textarea>
          </v-col>
          <v-col cols="10" offset="1">
            <v-file-input show-size counter label="群图片"></v-file-input>
          </v-col>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn class="btnmargin" outlined color="error" large @click="groupDialog=false">放弃</v-btn>
            <v-btn class="btnmargin" color="primary" large>发布</v-btn>
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
import store from "@/store/index"
export default {
  data(){
    return{
      btndisable:false,
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
        "测试1",
      ],
      tags:[
        "标签1","标签2"
      ],
      //图片上传之后，返回的图片URL列表
      picUrls:[]
    }
  },
  methods:{
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
      let sendData={
        content:this.content,
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
        }else{
          this.result=res.data
        }
        this.resultWin=true
      })
      this.picUrls=[]
    },
    uploadPic(){
      this.btndisable=true
      let len = this.pics.length
      if (len==0) {
        this.newPost()
        return
      }
      let index = 0
      this.pics.forEach(ele => {
        index++
        var file = ele
        console.log(file)
        let formData = new FormData()
        formData.append("img",file)
        this.axios.post('uploadPics',formData,{
          headers:{'Content-Type':'multipart/form-data'}
        }).then(res=>{
          if (res.status==200) {
            this.picUrls.push(res.data)
            if (len==index) {
              this.newPost()
            }
          }else{
            this.result="上传图片失败"+res.data
            this.resultWin=true
            return
          }
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
      })
    },
    goHome(){
      this.$router.push('/')
    },
    changDrawer(){
      store.commit('changeDrawer')
    },
    customFilter (item, queryText) {
      const textOne = item.name.toLowerCase()
      const searchText = queryText.toLowerCase()
      return textOne.indexOf(searchText) > -1 
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
</style>