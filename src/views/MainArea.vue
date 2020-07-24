<template>
  <div>
    <div class="whitearea"></div>
    <v-row  >
      <v-col cols="2">
        <leftbar></leftbar>
      </v-col>
      <v-col cols="3">
        <div class="flex-column" v-for="(card,index) in cardsData" :key="index">
          <card 
            :username="card.username" :groupname="card.groupname"
            :content="card.content" :topic="card.topic" :replays="card.replays"></card>
          
        </div>
      </v-col>
      <v-col cols="3">
        <div class="flex-column">
          
        </div>
      </v-col>
      <v-col cols="3">
        <div class="flex-column">
          
        </div>
      </v-col>
    </v-row>
    
  </div>
</template>

<script>
import card from "@/components/Card.vue"
import leftbar from "@/components/LeftBar.vue"
export default {
  components:{
    card,
    leftbar
  },
  data(){
    return{
      cardsData:[
        {
          username:"深蓝",
          groupname:"",
          content:'第一条信息的内容',
          topic:["测试"],
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
          replays:[
            {name:"visiter1",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/02/网站logo2.png",
            content:"精彩！"}
          ]
        },
      ],
      cards1:[],
      cards2:[],
      cards3:[],
      screenWidth:0
    }
  },
  computed:{
    length(){
      return document.body.clientWidth
    }
  },
  methods:{
    //将数据均匀地分到3列
    shunt3(){
      this.cards1=[]
      this.cards2=[]
      this.cards3=[]
      var count1=1
      this.cardsData.forEach(element => {
        if (count1%3==0) {
          this.cards3.push(element)
          count1++
          
        }
        if (count1%2==0) {
          this.cards2.push(element)
          count1++
          
        }else{
          this.cards1.push(element)
        }
      });
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
        }else{
          this.cards2.push(element)
        }
      })
    },
    //只分到一列
    shunt1(){
      this.cards2=[]
      this.cards3=[]
      this.cards1=this.cardsData
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
  },
  watch:{
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
.whitearea{
  height: 60px;
}
</style>