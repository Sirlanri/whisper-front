<template>
  <div>
    <v-row>
      <reply
        v-for="(re,index) in replysData"
        :key="index"
        :name="re.name"
        :avatar="re.avatar"
        :haveRead="re.haveRead"
        :content="re.content"
        :id="re.id"
        :postid="re.postid"
      ></reply>
    </v-row>
  </div>
</template>

<script>
import reply from "@/components/SingleReply.vue";
export default {
  components: {
    reply,
  },
  data() {
    return {
      replysData: [
        {
          id: 1,
          name: "深蓝蓝",
          avatar:
            "https://pic2.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
          haveRead: true,
          content: "回复的内容在这儿~",
        },
        {
          id: 2,
          name: "深蓝蓝",
          avatar:
            "https://pic2.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
          haveRead: false,
          content: "回复的内容在这儿~",
        },
        {
          id: 3,
          name: "深蓝蓝",
          avatar:
            "https://pic2.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
          haveRead: false,
          content: "回复的内容在这儿~",
        },
        {
          id: 4,
          name: "深蓝蓝",
          avatar:
            "https://pic2.zhimg.com/v2-2dc154cd8b6adcc9af9804b0686e30eb_xl.jpg",
          haveRead: false,
          content: "回复的内容在这儿~",
        },
      ],
    };
  },
  methods:{
    //获取全部reply详情
    getAllReply(){
      this.axios.get('getAllReply')
        .then(res=>{
          if (res.status==200) {
            this.replysData=res.data.replys
          }
        })
    }
  },
  created(){
    this.getAllReply()
  }
};
</script>

<style>
</style>