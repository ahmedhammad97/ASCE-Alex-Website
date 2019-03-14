<template>
  <div class="competitions">
    <h1>Competitions</h1>
    <br />

    <div class="comp" v-for="comp in comps" :key="comp.title">
      <h2>{{comp.title}}</h2>
      <p v-html="comp.body"></p>
      <img :src="comp.img" :alt="comp.alt">
    </div>

  </div>
</template>

<script>
export default {
  name: 'CompetitionsPage',
  data(){
    return{
      comps: [
        {
          title: 'The Egg protection device test 2016',
          body: 'In cooperation with ACI AAST Student Chapter, we were honored to hold this competition which objectives were to design and build the highest-impact-load-resistant plain or reinforced concrete Egg Protection Device (EPD), learn about concrete’s sustainable benefits related to durability, impact resistance, and other real-life aspects which an EPD simulates.<br />The EPD Competition was used to evaluate a potential structure for long term protection of a high-value military asset. The structure must be designed to protect the asset (egg) from repeated aerial bombardment as well as potential chemical attack.<br />Reinforcing placement and design plays a large role in the survivability of the structure as well as overall density of the concrete mixture itself. Physical strength was tested by dropping a weight onto the structure. The teams that successfully created a durable structure were rewarded.',
          img: require('../../../assets/events/c18.jpg'),
          alt: 'asdsdf'
        },
        {
          title: 'Egg Protection Device 2017',
          body: 'ASCE Alex Uni SC WON The 1st Place in Egg Protection Device Competition. It was a great victory to see a team of 4 ASCE Alex SC members wining This National competition and making it among 40 teams from all the Egyptian universities held at AAST.<br /><b>Our Team was under Dr. Salah Al-Fitiany’s supervision.</b>',
          img: require('../../../assets/events/c18.jpg'),
          alt: 'asdsdf'
        }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.comp{
  width: 90%;
  margin: auto;
  background-color: #8c959d;
  margin-bottom: 50px;
  border-radius: 0px 30px 0px 30px;
  padding: 10px;
}
.comp p{
  font-size: 20px;
  color: white;
}
.comp img{
  width: 40%;
  align-content: space-around;
}

</style>
