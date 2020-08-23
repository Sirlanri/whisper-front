<template>
  <div>
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>

      <v-col lg="9">
        <v-card>
          <v-img :src="userData.bannar" class="align-end" height="300">
            <v-col offset-lg="11">
              <v-btn class="changeBtn">更改资料</v-btn>
            </v-col>
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
          </v-row>
          
          
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
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
.changeBtn{
  
}
</style>