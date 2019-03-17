<template>
  <div id="app">
    <LoaderComponent :is-loading="isLoading"></LoaderComponent>
    <HeaderComponent></HeaderComponent>
    <transition :name="transitionType" mode="out-in">
      <router-view id="body"></router-view>
    </transition>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import LoaderComponent from './components/LoaderComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent,
    LoaderComponent
  },
  data(){
    return{
      isLoading: true,
      transitionType: null,
      routes: [
        '/',
        '/about',
        '/magazine',
        '/events/conference',
        '/events/visits',
        '/events/seminars',
        '/events/courses',
        '/events/competitions',
        '/events/activities',
        '/volunteers',
      ]
    }
  },
  methods: {
    getRoutesRanks: function(first, second){
      return [this.routes.indexOf(first), this.routes.indexOf(second)]
    }
  },
  watch: {
    '$route' (to, from) {
      let ranks = this.getRoutesRanks(from.path, to.path)
      if(from.path[1] === 'e' && to.path[1] === 'e'){this.transitionType = ranks[0] < ranks[1] ? 'slide-left' : 'slide-right'}
      else if(from.path[1] !== 'e' && to.path[1] !== 'e'){this.transitionType = ranks[0] < ranks[1] ? 'slide-left' : 'slide-right'}
      else{this.transitionType = 'fade'}
    }
  },
  mounted(){
    setTimeout(() => {
      this.isLoading = false
    }, 2000)
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
#app {
  font-family: 'Open Sans', sans-serif;
  text-align: center;
  color: #333;
  text-decoration: none;
}
#body{
  min-height: 1000px;
}
a{
  color: inherit;
}
h1{
  font-size: 40px;
}
h2{
  font-size: 30px;
}
p{
  font-size: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition-duration: 0.3s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}

.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  transform: translate(2em, 0);
}

.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  transform: translate(-2em, 0);
}
</style>
