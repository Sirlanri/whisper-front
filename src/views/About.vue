<template>
  <div class="about">
    <v-row>
      <v-col lg="2" class="d-none d-lg-flex"></v-col>
      <v-col>
        <v-row>
          <v-col lg="7">
            <v-card>
              <v-card-title>简介</v-card-title>
              <v-card-text>
                因为WordPress无法满足我，就准备自己写一个社交平台，来记录我的日常<br>
                这个项目的设计期望是“轻量社交平台”，不仅仅是我自己的日常，所有人都可以注册账号，记录自己的文字<br>
              </v-card-text>
            </v-card>
          
            <v-card>
              <v-card-title>技术栈</v-card-title>
              <v-card-text>
                设计思路：简约的material风格，摒弃冗杂的设计<br>
                代码层面采用前后端分离架构<br>
                前端：Vue+Vuetify <br>
                后端：Go+Iris+MySQL
              </v-card-text>
              <v-card-text>
                代码全部开源在GitHub，协议为MIT
              </v-card-text>
              <v-card-actions>
                <v-btn depressed @click="jumpto(1)">前端源码</v-btn>
                <v-btn depressed @click="jumpto(2)">后端源码</v-btn>
              </v-card-actions>
            </v-card>
            <v-card>
              <v-card-title>关于我</v-card-title>
              <v-card-text>
                梦想成为全沾工程师的学生党<br>
                喜欢前后端开发，数字媒体技术，以及有创造性的东西。最近在阅读经济学和博弈论的书籍，试图用理性思维控制自己<br>
                不怎么喜欢玩游戏，也就偶尔玩玩守望先锋，奶位玩家。是英雄联盟的云玩家，只看LPL比赛，自己不玩。<br>
                一直在等待，希望能早日遇见她。
              </v-card-text>
              <v-card-subtitle>联系方式</v-card-subtitle>
              <v-card-actions>
                <v-btn href="mailto:mail@ri-co.cn">邮箱</v-btn>
                <v-btn @click="jumpto(3)">GitHub</v-btn> 
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col lg="4">
            <v-card>
              <v-card-title>贡献</v-card-title>
              <v-card-subtitle>提出意见，反馈bug</v-card-subtitle>
              <v-card-text>
                可以直接在平台的“反馈”群组发文，也可以通过“关于我”的模块联系我<br>
                如果你是程序猿/媛，欢迎在GitHub提出issue，如果是PR就再好不过了，我会尽快合并处理。
              </v-card-text>
            </v-card>
            <v-card>
              <v-card-title>更新记录</v-card-title>
              <v-card-text>
                2020/8/8  前端写的差不多啦 <br>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  methods:{
    jumpto(num){
      switch (num) {
        case 1:
          window.open("https://github.com/Sirlanri/whisper-front")
          break;
        case 2:
          window.open("https://github.com/Sirlanri/whisper-back")
          break
        case 3:
          window.open("https://github.com/Sirlanri")
          break
        default:
          break;
      }
    }
  }
}
</script>
<style  scoped>
.v-card{
  margin:1rem 0;
}
</style>