<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      <v-col lg="9">
        <v-card>
          <v-img src="../assets/pics/bannar_black.png" class="align-end" height="300"  v-if="userData.bannar==undefined||userData.bannar==''">
          </v-img>
          <v-img :src="userData.bannar" class="align-end" height="300" v-else>
          </v-img>
          <v-row>
            <v-col lg="3">
              <v-img class="avatar align-center justify-center" src="../assets/pics/avart.png" v-if="userData.bannar==undefined||userData.avatar==''">
              </v-img>
              <v-img class="avatar align-center justify-center" :src="userData.avatar" v-else>
              </v-img>
            </v-col>
            <v-col lg="5">
              <v-card-title>{{userData.name}}</v-card-title>
              <v-card-subtitle>{{userData.intro}}</v-card-subtitle>
            </v-col>
            <v-col lg="3" offset="1">
              <v-card-text class="d-flex">
                <div class="colum-line">
                  发文数
                  <br />
                  <span class="count-text">&nbsp;{{userData.postCount}}</span>
                </div>
                <div class="colum-line" style="border-right:none">
                  评论数
                  <br />&nbsp;
                  <span class="count-text">{{userData.replyCount}}</span>
                </div>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <waterfall :cardsData="cardsData" @moreData="getUserPost" ref="fall"></waterfall>

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
import waterfall from "@/components/WaterFall.vue";
export default {
  components: {
    waterfall,
  },
  data() {
    return {
      userData:{},
      changeInfoWin: false,
      changeBannarWin: false,
      changeAvatarWin: false,
      cUserName: "",
      cMail: "",
      cIntro: "",
      cAvatar: null,
      cBannar: null,
      cardsData:[],
      
      btndisable:false,
      result:"",
      resultWin:false,
    };
  },
  methods: {
    //通过用户名获取当前点击用户的个人信息
    getUserData(){
      this.axios.get('getUserInfoByName',{
        params:{name:this.$store.state.clickUserName}
      }).then(res=>{
        if (res.status==200) {
          this.userData=res.data
        }else{
          this.result=res.data
          this.resultWin=true
        }
      }).catch(res=>{
        this.btndis=false
        this.result=res.response.data
        this.resultWin=true
      })
    },
    
    
    //获取点击用户发送的post，懒加载
    getUserPost(num){
      /* 重点！ waterfall组件内的countFlag很重要，只有countFlag>3时才会emit给父组件
       由于vue默认复用组件，如果页面切换，countFlag的值默认就为3，会做三次请求*/
      if (num==0) {
        this.$refs.fall.countFlag=0
      }
      this.axios.get('getPostByUser',{
        params:{name:this.$store.state.clickUserName,
        num:num}
      }).then(res=>{
        if (res.status==200) {
          res.data.posts.forEach(post => {
            this.cardsData.push(post)
          });
        }
      })
    },
  },
  mounted() {
    this.getUserData()
    this.getUserPost()
  },
  
  computed: {
    
  },
};
</script>

<style scoped>
.v-btn {
  margin: 0 0.5rem;
}
.avatar {
  height: 150px;
  width: 150px;
  margin-top: -50px;
  margin-left: 50px;
  margin-bottom: 20px;
  border-radius: 100% !important;
  box-shadow: 0px 0px 10px 5px #fff;
}
.changeBtn {
  right: 10px;
  position: absolute;
  bottom: 5px;
}
.count-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: #686868;
  padding-left: 5px;
}
.colum-line {
  border-right: 2px #d1d1d1 solid;
  width: auto;
  width: max-content;
  padding: 15px;
}
.fall-card {
  position: relative;
  width: 30%;
  margin: 1%;
  overflow: hidden;
  height: auto;
}
.changeBtnTop {
  right: 10px;
  position: absolute;
  top: 5px;
  opacity: 0.7;
  transition: 1s;
}
.changeBtnTop:hover {
  opacity: 1;
  transition: 0.5s;
}
.changAvatarBtn {
  height: 200px;
  margin: 0;
  opacity: 0;
  transition: opacity 0.5s;
}
.changAvatarBtn:hover {
  opacity: 1;
}
</style>