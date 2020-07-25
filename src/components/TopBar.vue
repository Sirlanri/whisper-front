<template>
<div>
  <v-card>
    <v-app-bar 
      fixed >
      <v-app-bar-nav-icon @click="changDrawer"></v-app-bar-nav-icon>
      <v-btn outlined>
        <v-icon>mdi-account-circle</v-icon>
        用户名
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="dialog=!dialog"><v-icon>mdi-plus-circle</v-icon></v-btn>
    </v-app-bar>
  </v-card>

  <v-dialog v-model="dialog" max-width="1000px">
    <v-card>
      <v-card-title>新随笔</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="10" offset="1">
            <v-textarea outlined label="随笔内容（不得超过256字哦）" v-model="content">
            </v-textarea>
          </v-col>
          <v-col cols="10" offset="1">
            <v-file-input
              v-model="files"
              color="deep-purple accent-4"
              counter
              label="图片"
              multiple
              prepend-icon="mdi-image"
              :show-size="1000"
            >
              <template v-slot:selection="{ index, text }">
                <v-chip
                  v-if="index < 2"
                  color="deep-purple accent-4"
                  dark
                  label
                  small
                >
                  {{ text }}
                </v-chip>

                <span
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2"
                >
                  +{{ files.length - 2 }} File(s)
                </span>
              </template>
            </v-file-input>
          </v-col>
          <v-col cols="10" offset="1">
            <v-autocomplete
              clearable
              v-model="selectGroup"
              :items="groupNames"
              item-text="name"
              label="要发布的群名称"
            ></v-autocomplete>
          </v-col>
          <v-col cols="10" offset="1">
            <v-autocomplete
              v-model="selectTag"
              :items="tags"
              outlined
              chips
              small-chips
              label="选择标签"
              multiple
            ></v-autocomplete>
          </v-col>
        </v-row>

        <v-row>
          <v-spacer></v-spacer>
          <v-btn outlined color="error" large @click="dialog=false">放弃</v-btn>
          <v-btn color="primary" large>发布</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</div>
</template>

<script>
import store from "@/store/index"
export default {
  data(){
    return{
      dialog:false,
      content:"",
      files:null,
      selectGroup:"",
      selectTag:"",
      groupNames:[
        {name:"无",id:0},
        {name:"小组1",id:1},
        {name:"第二",id:2},
        {name:"老三组",id:3},
      ],
      tags:[
        "标签1","标签2"
      ]
    }
  },
  methods:{
    changDrawer(){
      store.commit('changeDrawer')
    },
    customFilter (item, queryText) {
      const textOne = item.name.toLowerCase()
      const searchText = queryText.toLowerCase()
      return textOne.indexOf(searchText) > -1 
    },
  }
}
</script>

<style scoped>
.v-btn{
  margin: 0 1rem;
}
</style>