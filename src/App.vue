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
  text-align: center;
  color: #333;
  text-decoration: none;
}
#body{
  min-height: 700px;
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
</style>
