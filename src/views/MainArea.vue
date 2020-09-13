<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      
      <v-col lg="3" md="5" sm="6" cols="10" offset="1" offset-sm="0" offset-md="1" offset-lg="0">
        <div class="flex-column" v-for="(card,index) in cards1" :key="index">
          <card v-on:tagname="openTag" :time="card.time" :avatar="card.avatar" :postid="card.id"
            :username="card.username" :groupname="card.groupname" :pics="card.pics" :groupid="card.groupid"
            :content="card.content" :topics="card.topic" :replays="card.replys"></card>
        </div>
      </v-col>
      <v-col lg="3" md="5" sm="6" class="hidden-xs-and-down">
        <div class="flex-column" v-for="(card,index) in cards2" :key="index">
          <card v-on:tagname="openTag" :time="card.time" :avatar="card.avatar" :postid="card.id"
            :username="card.username" :groupname="card.groupname" :pics="card.pics" :groupid="card.groupid"
            :content="card.content" :topics="card.topic" :replays="card.replys"></card>
        </div>
      </v-col>
      <v-col lg="3" md="0" class="hidden-md-and-down">
        <div class="flex-column" v-for="(card,index) in cards3" :key="index">
          <card v-on:tagname="openTag" :time="card.time" :avatar="card.avatar" :postid="card.id"
            :username="card.username" :groupname="card.groupname" :pics="card.pics" :groupid="card.groupid"
            :content="card.content" :topics="card.topic" :replays="card.replys"></card>
        </div>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import card from "@/components/Card.vue"

import store from "@/store/index"
export default {
  components:{
    card,
    
  },
  data(){
    return{
      cardsData:[
        {
          username:"深蓝",
          groupname:"source",
          avatar:"https://pic1.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
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
      cards1:[],
      cards2:[],
      cards3:[],
      screenWidth:1800
    }
  },
  created(){
    this.getAllPost()
  },
  computed:{
    
  },
  methods:{
    //获取全部post
    getAllPost(){
      this.cardsData=[]
      this.axios.get('getAllPost')
        .then(res=>{
          if (res.status==200) {
            this.cardsData=res.data.posts
          }
        })
    },
    //card组件点击tag后，显示此tag的全部推文
    openTag(tagname){
      console.log(tagname)
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
    shunt2(){
      this.cards1=[]
      this.cards2=[]
      this.cards3=[]
      var count2=1
      this.cardsData.forEach(element=>{
        if (count2%2==0) {
          this.cards1.push(element)
          count2++
        }else{
          this.cards2.push(element)
          count2++
        }
      })
      store.commit('closeDrawer')
    },
    //只分到一列
    shunt1(){
      this.cards2=[]
      this.cards3=[]
      this.cards1=this.cardsData
      store.commit('closeDrawer')
    },
    
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        window.screenWidth = document.body.clientWidth
        that.screenWidth = window.screenWidth
      })()
    }
    this.shunt3()
  },
  watch:{
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
    screenWidth:function() {
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
    }
  }


  
}
</script>

<style>

</style>