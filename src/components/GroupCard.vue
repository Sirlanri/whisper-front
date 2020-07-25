<template>
<v-col cols="4">
  <v-card class="group-card">
    <v-img class="align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
    </v-img>
    <v-card-title>群组名称</v-card-title>
    <v-card-text class="text--primary">
      群组介绍，简短一点
    </v-card-text>

    <v-card-actions>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn outlined color="primary"
            v-bind="attrs" v-on="on">
            <v-icon>mdi-pencil</v-icon>
            发布
          </v-btn>
        </template>
        <span>在此群组发布新帖</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="#3949AB" outlined
            v-bind="attrs" v-on="on">
            <v-icon>mdi-view-array-outline</v-icon>
            浏览
          </v-btn>
        </template>
        <span>浏览此群的帖子</span>
      </v-tooltip>
      
    </v-card-actions>
  </v-card>
  </v-col>
</template>

<script>
export default {

}
</script>

<style scoped>
.group-card{
  max-width: 400px;
  margin:1rem
}
.v-btn{
  margin: 0 0.5rem;
}
</style>