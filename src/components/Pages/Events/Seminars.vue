<template>
  <div class="seminars">

    <h1>Seminars</h1>
    <br />

    <b-card no-body v-for="seminar in seminars" :key="seminar.name" class="seminar">

      <b-card-header role="tab" class="seminarHeader">
        <b-button block v-b-toggle="seminar.name" class="seminarName">{{seminar.title}}</b-button>
      </b-card-header>

      <b-collapse :id="seminar.name" role="tabpanel" class="seminarBody" accordion="asceSeminars">
        <b-card-body>
          <p v-html="seminar.body"></p>
          <img :src="seminar.img" :alt="seminar.alt">
        </b-card-body>
      </b-collapse>

    </b-card>

  </div>
</template>

<script>
export default {
  name: 'SeminarsPage',
  data(){
    return {
      seminars: [
        {
          title: '"Wired For Brilliance" Seminar',
          name: 'wired',
          body: 'In cooperation with Global Next Research institute we hosted and organized this seminar which was all about sorting out the important stuff regarding relationships, emotional intelligence and how you relate to a life of purpose.<br /><b>Speaker: Dr. Phil Johnson.</b>',
          img: require('../../../assets/events/seminar16.jpg'),
          alt: 'Image of Dr. Phil Johnson talking'
        },
        {
          title: 'Tunnels Seminar',
          name: 'tunnels',
          body: 'The seminar’s main objective was to introduce undergrads to one of the most vital fields in Civil Engineering and give them the opportunity to know more about it.<br /><b>The seminar was conducted by Prof. Dr. Ahmed Shawky at Faculty of Engineering Alexandria University.</b>',
        },
        {
          title: 'Living the Building Challenge Seminar',
          name: 'challenge',
          body: 'The seminar offered a deeper look into Living Building Challenge’s definition, its dimensions, and its uses. The Living Building Challenge (LBC) is a certified program that defines the most advanced measure of sustainability, providing a framework for design, construction and the symbiotic relationship between people and all aspects of the built environment.<br /><b>Speaker: Eng. Amira Yacoub<br />The Seminar took place in the New Library at Faculty of Engineering, Alexandria University.</b>',
          img: require('../../../assets/events/seminar18.jpg'),
          alt: 'image of Eng. Amira Yacoub talking'
        },
        {
          title: 'Research 101',
          name: 'research',
          body: 'Research 101 aims to develop the research skills needed for engineers to be updated with new technologies in addition to providing them with all information about this significant field in Civil engineering. Participants were given a series of sessions held by professional instructors to make them capable of writing scientific articles in a professional way.<br /><b>Number of participants: 20</b>',
          img: require('../../../assets/events/research101.jpg'),
          alt: 'The seminar\'s host talking'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.seminar{
  width: 80%;
  margin: auto;
  border: 0;
}
.seminarHeader{
  padding: 0;
  margin-bottom: 20px;
}
.seminarBody{
  background-color: #19a1cf;
  margin-bottom: 20px;
  margin-top: -25px;
  color: white;
}
.seminarName{
  font-size: 25px;
  padding: 10px;
  background-color: #0c5fa8;
  color: white;
  border: 0;
}
.seminarName:hover{
  background-color: #19a1cf;
  transition: 0.5s ease-in-out;
}
.seminarName:focus{
  box-shadow: 0 0 0 0 white;
}
.seminarBody img{
  width: 90%;
  border-radius: 10px;
}

</style>
