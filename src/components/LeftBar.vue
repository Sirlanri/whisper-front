<template>
  <div>
    
    <v-navigation-drawer fixed style="top:64px">
      <v-list>
        <v-list-item>
          <v-btn block text large>
            <v-list-item-icon>
              <v-icon>mdi-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              消息
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block text large>
            <v-list-item-icon>
              <v-icon>mdi-account-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              群组
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        <v-list-item>
          <v-btn block text large>
            <v-list-item-icon>
              <v-icon>mdi-arrange-send-to-back</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              话题
            </v-list-item-content>
          </v-btn>
        </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>