<template>
  <div class="visits">
    <h1>Visits</h1>
    <br />

    <carousel id="carousel" :perPage="1" :centerMode="true" :navigationEnabled="true" :speed="1000">
      <slide>
        Slide 1 Content
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
    </carousel>

  </div>
</template>

<script>
export default {
  name: 'VisitsPage',
  data(){
    return{
      transparent: require('../../../assets/transparent.png'),
      visits: [
        {
          heading: 'Visit1',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img : require('../../../assets/events/c18.jpg'),
          alt: 'This is alt one'
        },
        {
          heading: 'Visit2',
          body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          img : require('../../../assets/events/c16.jpg'),
          alt: 'This is alt two'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
#carousel{
  width: 80%;
  margin: auto;
}
.carouselText{color:red; font-size: 20px;}
.carouselHeading{color: blue; font-size: 30px;}
.carouselImg{width: 80%;}

@media screen and (max-width: 992px){
  #carousel{
    margin-top: 100px;
  }
}
</style>
