<template>
  <div class="home">

    <div class="banners">
      <div v-for="banner in banners" :key="banner.name" class="bannerContainer">
        <router-link :to="banner.route">
          <span >{{banner.name}}</span>
          <div :style="{'background-image': 'url(' + banner.bg + ')'}" class="banner"></div>
        </router-link>
      </div>
    </div>
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
      <a target="_blank" href="https://forms.gle/PXYrEaCYiKVsZ8C5A"><button type="button" name="button">Join us!</button></a>
      <br />
    </div>

  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data(){
    return{
      banners: [
        {
          name: "Construction Conference",
          bg: require('../../assets/events/c18.jpg'),
          route: "/events/conference"
        },
        {
          name: "Seminars",
          bg: require('../../assets/events/BIMSeminar.jpg'),
          route: "/events/seminars"
        },
        {
          name: "Competitions",
          bg: require('../../assets/events/epd17.jpg'),
          route: "/events/competitions"
        },
        {
          name: "Activities",
          bg: require('../../assets/events/fair19.jpg'),
          route: "/events/activities"
        }
      ],
      insights: [
        {
          id: 'members',
          body: '300+ Members',
          img: require('../../assets/icons/team.png'),
          alt: 'Team character image'
        },
        {
          id: 'events',
          body: '50+ Events',
          img: require('../../assets/icons/calendar.png'),
          alt: 'Calendar vector image'
        },
        {
          id: 'impact',
          body: '~3,000+ Impacts',
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
  .banners{
    margin-top: -44px;
    background-color: black;
  }
  .banner{
    height: 500px;
    opacity: 0.8;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    -webkit-filter: blur(3px);
  }
  .bannerContainer{
    position: relative;
  }
  .banners span{
    border: 3px solid white;
    padding: 5px;
    font-size: 60px;
    font-weight: bold;
    width: 75%;
    color: white;
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .banners span:hover + .banner, .banner:hover{
    opacity: 1;
    transition: all 0.8s ease-in-out;
    cursor: pointer;
    filter: blur(1px);
    -webkit-filter: blur(1px);
  }
  .banners span:hover{
    cursor: pointer;
    transition: all 0.5s ease-in-out
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
    .banners span{
      font-size: 25px;
      width: 85%;
    }
    .banner{
      height: 300px;
    }
  }
</style>
