<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>

      <v-col lg="9">
        <v-card>
          <v-img :src="userData.bannar" class="align-end" height="300">
            <v-btn class="changeBtn">更改资料</v-btn>
          </v-img>
          <v-row>
            <v-col lg="2">
              <v-img class="avatar" :src="userData.avatar"></v-img>
            </v-col>
            <v-col lg="6">
              <v-card-title>
                {{userData.name}}
              </v-card-title>
              <v-card-subtitle>
                {{userData.intro}}
              </v-card-subtitle>
            </v-col>
            <v-col lg="3" offset="1">
              <v-card-text class="d-flex">
                <div class="colum-line">
                  发文数<br> 
                  <span class="count-text">&nbsp;{{userData.postCount}} </span>
                </div>
                <div class="colum-line" style="border-right:none">
                  评论数<br>&nbsp;
                  <span class="count-text">{{userData.replyCount}} </span>
                </div>
                
              </v-card-text>
              
            </v-col>
          </v-row>
        </v-card>
        <div class="d-flex flex-row flex-wrap ">
          <card class="fall-card"
            v-for="(card,index) in cardsData" 
            :time="card.time" :key="index"
            :username="card.username" :groupname="card.groupname" :pics="card.pics"
            :content="card.content" :topics="card.topic" :replays="card.replays"
          >
          </card>
        </div>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import card from "@/components/Card.vue"
export default {
  components:{
    card
  },
  data(){
    return{
      cardsData:[
        {
          username:"深蓝",
          groupname:"source",
          content:'第一条信息的内容',
          topic:["测试","测试2"],
          time:"4/23 13:50",
          pics:[
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/purple.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg"
          ],
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
          ]
        },
        {
          username:"深蓝",
          groupname:"source",
          content:'第一条信息的内容',
          topic:["测试","测试2"],
          time:"4/23 13:50",
          pics:[
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/white1.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/black-white.jpg",
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/red-white.jpg"
          ],
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"},
          ]
        },
        {
          username:"深蓝",
          groupname:"",
          content:'第2条信息的内容',
          topic:["测试"],
          time:"4/23 13:50",
          pics:[
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg",
            
          ],
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
        {
          username:"深蓝",
          groupname:"",
          content:'第3条信息的内容',
          topic:["测试"],
          time:"4/23 13:50",
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
        {
          username:"深蓝",
          groupname:"",
          content:'第4条信息的内容',
          topic:["测试"],
          pics:[
            "https://blog.ri-co.cn/wp-content/uploads/2020/04/blue.jpg"
          ],
          time:"4/23 13:50",
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
        {
          username:"深蓝",
          groupname:"小组1",
          content:'第5条信息的内容',
          topic:["测试"],
          time:"4/23 13:50",
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
        {
          username:"深蓝",
          groupname:"小组1",
          content:'第5条信息的内容',
          topic:["测试"],
          time:"4/23 13:50",
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
        {
          username:"深蓝",
          groupname:"小组1",
          content:'第5条信息的内容',
          topic:["测试"],
          time:"4/23 13:50",
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
      ],
    }
  },
  computed:{
    userData(){
      return this.$store.state.userData
    }
  }
}
</script>

<style>
.avatar{
  height: 150px;
  width: 150px;
  margin-top: -50px;
  margin-left: 50px;
  margin-bottom: 20px;
  border-radius: 100% !important;
  box-shadow:  0px 0px 10px 5px #fff;
}
.changeBtn {
 right: 10px;
 position: absolute;
 bottom: 5px;
}
.count-text{
  font-size: 1.5rem;
  font-weight: 700;
  color: #686868;
  padding-left: 5px;

}
.colum-line{
  border-right: 2px #d1d1d1 solid;
  width: auto;
  width: max-content;
  padding: 15px;

}
.fall-card{
  position: relative;
  width: 30%;
  margin: 1%;
  overflow: hidden;
  height: auto;
}
</style>