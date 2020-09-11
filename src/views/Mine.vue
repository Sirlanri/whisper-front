<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>

      <v-col lg="9">
        <v-card>
          <v-img src="../assets/pics/bannar_black.png" class="align-end" height="300"  v-if="userData.bannar==undefined||userData.bannar==''">
            <v-btn class="changeBtnTop" dark @click="changeBannarWin=true">更换背景图</v-btn>
            <v-btn class="changeBtn" @click="changeInfo">更改资料</v-btn>
          </v-img>
          <v-img :src="userData.bannar" class="align-end" height="300" v-else>
            <v-btn class="changeBtnTop" dark @click="changeBannarWin=true">更换背景图</v-btn>
            <v-btn class="changeBtn" @click="changeInfo">更改资料</v-btn>
          </v-img>
          <v-row>
            <v-col lg="3">
              <v-img class="avatar align-center justify-center" src="../assets/pics/avart.png" v-if="userData.bannar==undefined||userData.avatar==''">
                <v-btn x-large block dark class="changAvatarBtn" @click="changeAvatarWin=true">更换头像</v-btn>
              </v-img>
              <v-img class="avatar align-center justify-center" :src="userData.avatar" v-else>
                <v-btn x-large block dark class="changAvatarBtn" @click="changeAvatarWin=true">更换头像</v-btn>
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
      <v-col lg="2" class="d-none d-lg-flex"></v-col>

      <v-col lg="3" md="5" sm="6" cols="10" offset="1" offset-sm="0" offset-md="1" offset-lg="0">
        <div class="flex-column" v-for="(card,index) in cards1" :key="index">
          <card
            v-on:tagname="openTag"
            :time="card.time"
            :username="card.username"
            :groupname="card.groupname"
            :pics="card.pics"
            :content="card.content"
            :topics="card.topic"
            :replays="card.replys"
             :avatar="card.avatar" :postid="card.id"
          ></card>
        </div>
      </v-col>
      <v-col lg="3" md="5" sm="6" class="hidden-xs-and-down">
        <div class="flex-column" v-for="(card,index) in cards2" :key="index">
          <card
            v-on:tagname="openTag"
            :time="card.time"
            :username="card.username"
            :groupname="card.groupname"
            :pics="card.pics"
            :content="card.content"
            :topics="card.topic"
            :replays="card.replys"
             :avatar="card.avatar" :postid="card.id"
          ></card>
        </div>
      </v-col>
      <v-col lg="3" md="0" class="hidden-md-and-down">
        <div class="flex-column" v-for="(card,index) in cards3" :key="index">
          <card
            v-on:tagname="openTag"
            :time="card.time"
            :username="card.username"
            :groupname="card.groupname"
            :pics="card.pics"
            :content="card.content"
            :topics="card.topic"
            :replays="card.replys"
             :avatar="card.avatar" :postid="card.id"
          ></card>
        </div>
      </v-col>
    </v-row>
    <v-dialog v-model="changeInfoWin" max-width="800">
      <v-card>
        <v-col cols="10" offset="1">
          <v-card-title>修改资料</v-card-title>
          <v-card-text>
            <v-text-field v-model="cUserName" label="用户昵称"></v-text-field>
            <v-text-field v-model="cMail" label="邮箱"></v-text-field>
            <v-textarea v-model="cIntro" label="个人简介" outlined></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-col offset-md="8" offset="5" cols="4">
              <v-btn outlined color="error" large @click="changeInfoWin=false">放弃</v-btn>
              <v-btn color="primary" large @click="commitChange">修改</v-btn>
            </v-col>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-dialog>
    <v-dialog v-model="changeBannarWin" max-width="800">
      <v-card>
        <v-col cols="10" offset="1">
          <v-card-title>更换背景图</v-card-title>
          <v-card-text>
            <v-file-input
              prepend-icon="mdi-image"
              accept="image/*"
              label="点击上传新背景图"
              v-model="cBannar"
            ></v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-col offset-md="8" offset="5" cols="4">
              <v-btn outlined color="error" large @click="changeBannarWin=false">放弃</v-btn>
              <v-btn color="primary" large @click="commitBannar">修改</v-btn>
            </v-col>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-dialog>
    <v-dialog v-model="changeAvatarWin" max-width="800">
      <v-card>
        <v-col cols="10" offset="1">
          <v-card-title>更换头像</v-card-title>
          <v-card-text>
            <v-file-input
              prepend-icon="mdi-account-circle"
              accept="image/*"
              label="点击上传新头像"
              v-model="cAvatar"
            ></v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-col offset-md="8" offset="5" cols="4">
              <v-btn outlined color="error" large @click="changeAvatarWin=false">放弃</v-btn>
              <v-btn color="primary" large @click="commitAvatar">修改</v-btn>
            </v-col>
          </v-card-actions>
        </v-col>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import card from "@/components/Card.vue";
import store from "@/store/index";
export default {
  components: {
    card,
  },
  data() {
    return {
      changeInfoWin: false,
      changeBannarWin: false,
      changeAvatarWin: false,
      cUserName: "",
      cMail: "",
      cIntro: "",
      cAvatar: null,
      cBannar: null,
      cardsData:[],
      cards1: [],
      cards2: [],
      cards3: [],
      screenWidth: 1800,
    };
  },
  methods: {
    //提交头像的更换
    commitAvatar() {},
    //提交bannar的更换
    commitBannar() {},
    //向后端提交用户信息的修改
    commitChange() {},
    //用户点击更改资料按钮
    changeInfo() {
      this.cUserName = store.state.userData.name;
      this.cMail = store.state.userData.mail;
      this.cIntro = store.state.userData.intro;
      this.changeInfoWin = true;
    },
    //card组件点击tag后，显示此tag的全部推文
    openTag(tagname) {
      console.log(tagname);
    },
    //将数据均匀地分到3列
    shunt3(){
      this.cards1=[]
      this.cards2=[]
      this.cards3=[]
      var len = this.cardsData.length
      for (let index = 0; index < len/3; index++) {
        this.cards1.push(this.cardsData[index*3])
        if (index*3+1<len) {
          this.cards2.push(this.cardsData[index*3+1])
          if (index*3+2<len) {
            this.cards3.push(this.cardsData[index*3+2])
          }else{
            break
          }
        }else{
          break
        }
        
        
      }
      
    },
    //将数据均匀地分到2列
    shunt2() {
      this.cards1 = [];
      this.cards2 = [];
      this.cards3 = [];
      var count2 = 1;
      this.cardsData.forEach((element) => {
        if (count2 % 2 == 0) {
          this.cards1.push(element);
          count2++;
        } else {
          this.cards2.push(element);
          count2++;
        }
      });
      store.commit("closeDrawer");
    },
    //只分到一列
    shunt1() {
      this.cards2 = [];
      this.cards3 = [];
      this.cards1 = this.cardsData;
      store.commit("closeDrawer");
    },
    //获取自己发送的全部post
    getUserPost(){
      this.axios.get('getPostByUser',{
        params:{name:this.$store.state.userData.name}
      }).then(res=>{
        if (res.status==200) {
          this.cardsData=res.data.posts
        }
      })
    }
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
  },
  created(){
    this.getUserPost()
  },
  watch: {
    cardsData:function() {
      if (this.screenWidth>=1264) {
        this.shunt3()
        return
      }
      if (this.screenWidth<=600) {
        this.shunt1()
        return
      }
      else{
        this.shunt2()
      }
    },
    screenWidth: function () {
      if (this.screenWidth >= 1264) {
        this.shunt3();
        return;
      }
      if (this.screenWidth <= 600) {
        this.shunt1();
        return;
      } else {
        this.shunt2();
      }
    },
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
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