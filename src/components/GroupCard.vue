<template>
<v-col lg="4" md="6" cols="10" offset="1" offset-md="0">
  <v-card class="group-card" v-ripple @click="openPost">
    <v-img class="align-end"
        height="200px"
        :src="imgsrc">
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
  </v-col>
</template>

<script>
export default {
  props:{
    id:Number,
    imgsrc:String,
    name:String,
    intro:String,
    amount:Number,
  },
  methods:{
    openPost(){
      this.$store.commit('setClickUserName',this.id)
      this.$router.push('/groupPosts')
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