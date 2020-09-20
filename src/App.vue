<template>
  <v-app>
    
    <vue-particles
      class="partical"
       color="#1b1b1b"
       v-show="particleSwitch"
       :particleOpacity="0.9"
       :particlesNumber="50"
       shapeType="circle"
       :particleSize="2"
       linesColor="#3b3b3b"
       :linesWidth="1"
       :lineLinked="true"
       :lineOpacity="0.9"
       :linesDistance="150"
       :moveSpeed="3"
       :hoverEffect="true"
       hoverMode="grab"
       :clickEffect="true"
       clickMode="push"
     >
     </vue-particles>
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
    
  },

  data: () => ({
    //
  }),

  computed:{
    particleSwitch(){
      return this.$store.state.particle
    }
  }
};
</script>
<style>
#particles-js{
  width: 100%;
  height: 100%;
  position: fixed;  
}
</style>