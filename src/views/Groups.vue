<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      <v-col>
        <v-row >
          <groupcard v-for="(group,index) in groups" :key="index" :id="group.id" :amount="group.amount"
            :name=group.name :intro=group.intro :imgsrc=group.imgsrc
          ></groupcard>
          
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import groupcard from "@/components/GroupCard.vue";
export default {
  components: {
    groupcard,
  },
  data(){
    return{
      groups:[
        {id:1,amount:10,name:"群组1",intro:"这是第一个群组！",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white-grey.jpg"},
        {id:1,amount:10,name:"群组2",intro:"这是第个群组！",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white-grey.jpg"},
        {id:1,amount:10,name:"群组3",intro:"这是第个群组！",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white-grey.jpg"},
        {id:1,amount:10,name:"群组4",intro:"这是第个群组！",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white-grey.jpg"},
        {id:1,amount:10,name:"群组5",intro:"这是第个群组！",imgsrc:"https://blog.ri-co.cn/wp-content/uploads/2020/04/white-grey.jpg"},
      ]
    }
  },
  methods:{
    getGroups(){
      this.axios.get('getGroups')
      .then(res=>{
        if (res.status==200) {
          this.groups=res.data.groups
        }
      })
    }
  },
  created(){
    this.getGroups()
  }
};
</script>

<style>
</style>