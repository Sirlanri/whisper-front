<template>
<v-col lg="4" md="6" cols="10" offset="1" offset-md="0">
  <v-card class="group-card" v-ripple @click="openPost">
    <v-img class="align-start justify-end"
        height="200px"
        :src="imgsrc">
        
        <v-menu v-if="isAdmin">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon large
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="delDialog=true" color="warning">
            删除群
          </v-list-item>
          <v-list-item @click="delAllDialog=true" color="warning">
            删除群及其全部Post
          </v-list-item>
          
        </v-list>
      </v-menu>
    </v-img>
    <v-card-title>
      {{name}}
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <span class="count-num" v-bind="attrs" v-on="on">&nbsp;{{amount}}</span>
          
        </template>
        <span>此群的文章数</span>
      </v-tooltip>
      <div>
        
      </div>
      
    </v-card-title>
    <v-card-text class="text--primary">
      {{intro}}

      
    </v-card-text>
    
    
  </v-card>

  <v-dialog v-model="delDialog" max-width="400">
    <v-card>
      <v-col cols="10" offset="1">
        <v-card-title>
          确认删除此群？
        </v-card-title>
        <v-card-text>
          群信息会被删除，群内的post会被修改为无群状态
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn @click="delDialog=false" large color="primary">取消</v-btn>
          <v-btn @click="delGroupOnly" large color="red" :disabled="btndis">删除</v-btn>
        </v-card-actions>
      </v-col>
    </v-card>
  </v-dialog>
  <v-dialog v-model="delAllDialog" max-width="400">
    <v-card>
      <v-col cols="10" offset="1">
        <v-card-title>
          警告
        </v-card-title>
        <v-card-text>
          此操作会删除群及其群里的全部post！
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn @click="delAllDialog=false" large color="primary">取消</v-btn>
          <v-btn @click="delGroupAll" large color="red" :disabled="btndis">删除</v-btn>
        </v-card-actions>
      </v-col>
    </v-card>
  </v-dialog>
  
  <v-snackbar v-model="resultWin">
    {{result}}
    <template  v-slot:action="{ attrs }">
      <v-btn color="blue" text @click="resultWin=false" v-bind="attrs">
        知道了
      </v-btn>
    </template>
  </v-snackbar>
</v-col>
</template>

<script>
export default {
  data(){
    return{
      result:"",
      resultWin:false,
      delDialog:false,
      delAllDialog:false,
      btndis:false,
    }
  },
  props:{
    id:Number,
    imgsrc:String,
    name:String,
    intro:String,
    amount:Number,
  },
  methods:{
    //删除群+其post
    delGroupAll(){
      this.btndis=true
      this.axios.get('/delGroupAll',{
        params:{id:this.id}
      }).then(res=>{
        if (res.status==200) {
          this.result=res.data
          this.delAllDialog=false
          this.resultWin=true
          this.btndis=false
        }else{
          this.btndis=false
          this.result=res.data
          this.resultWin=true
        }
      })
    },
    //只删除群
    delGroupOnly(){
      this.btndis=true
      this.axios.get('/delGroupOnly',{
        params:{id:this.id}
      }).then(res=>{
        if (res.status==200) {
          this.result=res.data
          this.delDialog=false
          this.resultWin=true
          this.btndis=false
        }else{
          this.btndis=false
          this.result=res.data
          this.resultWin=true
        }
      })
    },
    openPost(){
      this.$store.commit('setClickUserName',this.id)
      this.$router.push('/groupPosts')
    }
  },
  computed:{
    isAdmin(){
      return this.$store.getters.isAdmin
    }
  }
}
</script>

<style scoped>
.group-card{
  max-width: 600px;
  margin:1rem
}
.v-btn{
  margin: 0 0.5rem;
}
.amount{
  color:#5b5b5b;
}
.count-word{
  font-size: 1rem;
}
.count-num{
  font-size: 1.3rem;
  font-weight: 600;
  color: #686868;
  padding-left: 5px;
}
</style>