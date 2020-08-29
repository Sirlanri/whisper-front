<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>

      <v-col lg="9">
        <v-card>
          <v-img :src="userData.bannar" class="align-end" height="300">
            <v-btn class="changeBtn" @click="dialog=true">更改资料</v-btn>
          </v-img>
          <v-row>
            <v-col lg="2">
              <v-img class="avatar" :src="userData.avatar"></v-img>
            </v-col>
            <v-col lg="6">
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
            :replays="card.replays"
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
            :replays="card.replays"
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
            :replays="card.replays"
          ></card>
        </div>
      </v-col>
    </v-row>
    
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
      dialog: false,
      cardsData: [
        {
          username: "深蓝",
          groupname: "source",
          content:
            "第一条信息的内容，有点长，然后我想看看这个玩一二会多长啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊",
          topic: ["测试", "测试2"],
          time: "4/23 13:50",
          pics: [
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/purple.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg",
          ],
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "source",
          content: "第一条信息的内容",
          topic: ["测试", "测试2"],
          time: "4/23 13:50",
          pics: [
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg",
          ],
          replays: [
            {
              name: "visiter1",
              imgsrc: "",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc: "",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc: "",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc: "",
              content: "精彩！",
            },
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "",
          content: "第2条信息的内容",
          topic: ["测试"],
          time: "4/23 13:50",
          pics: ["https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg"],
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "",
          content: "第3条信息的内容",
          topic: ["测试"],
          time: "4/23 13:50",
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "",
          content: "第4条信息的内容",
          topic: ["测试"],
          pics: ["https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg"],
          time: "4/23 13:50",
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "小组1",
          content: "第5条信息的内容",
          topic: ["测试"],
          time: "4/23 13:50",
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "小组1",
          content: "第5条信息的内容",
          topic: ["测试"],
          time: "4/23 13:50",
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
        {
          username: "深蓝",
          groupname: "小组1",
          content: "第5条信息的内容",
          topic: ["测试"],
          time: "4/23 13:50",
          replays: [
            {
              name: "visiter1",
              imgsrc:
                "https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
              content: "精彩！",
            },
          ],
        },
      ],
      cards1: [],
      cards2: [],
      cards3: [],
      screenWidth: 1800,
    };
  },
  methods: {
    //card组件点击tag后，显示此tag的全部推文
    openTag(tagname) {
      console.log(tagname);
    },
    //将数据均匀地分到3列
    shunt3() {
      this.cards1 = [];
      this.cards2 = [];
      this.cards3 = [];
      var count1 = 1;
      this.cardsData.forEach((element) => {
        if (count1 % 3 == 0) {
          this.cards3.push(element);
          count1++;
        }
        if (count1 % 2 == 0) {
          this.cards2.push(element);
          count1++;
        } else {
          this.cards1.push(element);
          count1++;
        }
      });
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
  },
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth;
        that.screenWidth = window.screenWidth;
      })();
    };
    this.shunt3();
  },
  watch: {
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

<style>
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
</style>