<template>
  <div id="app">
    <HeaderComponent></HeaderComponent>
    <router-view id="body"></router-view>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterComponent from './components/FooterComponent.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FooterComponent
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans');
#app {
  font-family: 'Open Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  text-decoration: none;
}
a{
  color: inherit;
}
#body{
  min-height: 700px;
}
</style>
