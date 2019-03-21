<template>
  <div class="home">
    <div class="headings">
      <span>We shape our buildings; thereafter they shape us.</span>
    </div>

    <b-carousel class="carousel" fade :interval="4000">
      <b-carousel-slide :img-src="require('../../assets/events/seminar16.jpg')" />
      <b-carousel-slide :img-src="require('../../assets/events/newCap.jpg')" />
      <b-carousel-slide :img-src="require('../../assets/events/sidiGaber.jpg')" />
    </b-carousel>
    <br /><br />

    <div class="insights">
      <p>In few years, we represesnted:</p>
      <br />
      <b-row>

        <b-col v-for="insight in insights" :key="insight.id" sm="12" md="4" class="insightsBody">
          <span class="insightsLogo"><img :src="insight.img" :alt="insight.alt" /></span>
          <br />
          <span class="insightsText"><b>{{insight.body}}</b></span>
        </b-col>

      </b-row>
      <br /><br />
    </div>

    <div class="join">
      <p>New members are always welcomed!</p>
      <br />
      <a target="_blank" href="https://www.facebook.com/ASCEalexSC"><button type="button" name="button">Join us!</button></a>
      <br />
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return{
      insights: [
        {
          id: 'members',
          body: '80+ Members',
          img: require('../../assets/icons/team.png'),
          alt: 'Team character image'
        },
        {
          id: 'events',
          body: '25+ Events',
          img: require('../../assets/icons/calendar.png'),
          alt: 'Calendar vector image'
        },
        {
          id: 'impact',
          body: '~5,000+ Impacts',
          img: require('../../assets/icons/speackers.png'),
          alt: 'Speackers vector image'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Architects+Daughter');
  .carousel{
    margin-top: -44px;
    opacity: 0.65;
    background-blend-mode: darken;
  }
  .headings{
    position: absolute;
    z-index: 99;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 12%;
  }
  .headings span{
    font-size: 50px;
    font-family: 'Architects Daughter', cursive;
    color: white;
    background-color: rgba(12,95,168,0.7);
    padding: 5px;
    font-style: italic;
    margin: 10px;
  }
  .insights{
    width: 90%;
    margin: auto;
  }
  .insightsBody{
    padding-bottom: 50px;
  }
  .insights p{
    font-size: 30px;
    text-align: center;
    font-weight: bold;
  }
  .insightsLogo img{
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
  }
  .insightsText{
    font-size: 25px;
  }
  .join{
    background-color: #333;
    padding: 50px;
    color: white;
  }
  .join p{
    font-size: 30px;
    font-weight: bold;
  }
  .join button{
    width: 200px;
    height: 50px;
    background-color: #0c5fa8;
    border-radius: 30px;
    border: 3px solid #0c5fa8;
    font-size: 25px;
    color: white;
    font-weight: bold;
    cursor: pointer;
  }
  .join button:hover{
    background-color: #333;
    border: 3px solid white;
    transition: all 0.3s ease-in-out;
  }


  @media screen and (max-width: 992px){
    .headings span{
      font-size: 25px;
    }
  }
</style>
