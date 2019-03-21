<template>
  <div class="competitions">
    <h1>Competitions</h1>
    <br />

    <b-card-group >
      <b-card v-for="comp in comps" :key="comp.title" :title="comp.title" :img-src="comp.img" :img-alt="comp.alt" class="card" img-top>
        <b-button v-b-modal="comp.id" variant="primary">Learn More</b-button>
      </b-card>
    </b-card-group>

    <b-modal v-for="comp in comps" :key="comp.title" :title="comp.title" :id="comp.id" v-model="comp.show">
      <p v-html="comp.body"></p>
      <b-button size="sm" class="float-right" variant="primary" @click="comp.show=false" slot="modal-footer">Close</b-button>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'CompetitionsPage',
  data(){
    return{
      comps: [
        {
          title: 'Egg Protection Device 2017',
          body: 'ASCE Alex Uni SC WON The 1st Place in Egg Protection Device Competition. It was a great victory to see a team of 4 ASCE Alex SC members wining This National competition and making it among 40 teams from all the Egyptian universities held at AAST.<br /><b>Our Team was under Dr. Salah Al-Fitiany’s supervision.</b>',
          img: require('../../../assets/events/epd17.jpg'),
          alt: 'Group photo of the winning team',
          id: 'egg17',
          show: false
        },
        {
          title: 'Egg Protection Device 2016',
          body: 'In cooperation with ACI AAST Student Chapter, we were honored to hold this competition which objectives were to design and build the highest-impact-load-resistant plain or reinforced concrete Egg Protection Device (EPD), learn about concrete’s sustainable benefits related to durability, impact resistance, and other real-life aspects which an EPD simulates.<br />The EPD Competition was used to evaluate a potential structure for long term protection of a high-value military asset. The structure must be designed to protect the asset (egg) from repeated aerial bombardment as well as potential chemical attack.<br />Reinforcing placement and design plays a large role in the survivability of the structure as well as overall density of the concrete mixture itself. Physical strength was tested by dropping a weight onto the structure. The teams that successfully created a durable structure were rewarded.',
          img: require('../../../assets/events/epd16.jpg'),
          alt: 'Group photo with Dean of Faculty of Engineering, Alexandria University',
          id: 'egg16',
          show: false
        },
      ]
    }
  }
}
</script>

<style scoped>
.card{
  margin: 150px;
}
p{
  text-align: left;
}

@media screen and (max-width: 992px){
  .card{margin: 50px;}
}

</style>
