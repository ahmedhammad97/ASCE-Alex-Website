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
      <div>
        <p v-if="comp.id !== 'bim19' && comp.id !== 'egg19'" v-html="comp.body"></p>

        <div v-if="comp.id === 'bim19'">
          <div v-for="model in models" :key="model.name">
            <p v-html="comp.body"></p>
            <center>
              <h2>{{model.name}}</h2>
              <br />
              <img :src="model.archSrc" class="modelimg">
              <img :src="model.strSrc" class="modelimg">
            </center>
            <br />
            <br />
          </div>
        </div>

        <div v-if="comp.id === 'egg19'">
          <img :src="comp.groupImg" class="compImg"><br /><br>
          <p>It was a great honor for us as ASCE ALEX SC to participate in EPD (Egg Protection Device) competition under supervision of ACI-AAST.</p>
          <br />
          <iframe src="https://www.youtube.com/embed/DUZdUNEwv-E" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br /><br />
          <p>We are glad to announce that we have achieved the 4th place among 39 teams who also participated in EPD Competition .</p>
          <br />
          <img :src="comp.img" class="compImg">
          <br />
          <p>Finally, we are so proud of our technical team who  exterted their utmost effort to be part of this competiton. For a whole month, our technical team were working on the design of concrete and steel reinforment till they succeeded and reached the 4th place in the comptetion and that was not easy especially among 39 teams.<br />Our technical team: Shrouk Mohamed, Shaimaa Abdullah El Abd,Mohamed Farrag, Moamen Shaltoot, Omar El Sherif</p>

        </div>

      </div>
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
          title: 'Egg Protection Device 2019',
          body: 'In cooperation with ACI AAST Student Chapter, we were honored to hold this competition which objectives were to design and build the highest-impact-load-resistant plain or reinforced concrete Egg Protection Device (EPD), learn about concrete’s sustainable benefits related to durability, impact resistance, and other real-life aspects which an EPD simulates.<br />The EPD Competition was used to evaluate a potential structure for long term protection of a high-value military asset. The structure must be designed to protect the asset (egg) from repeated aerial bombardment as well as potential chemical attack.<br />Reinforcing placement and design plays a large role in the survivability of the structure as well as overall density of the concrete mixture itself. Physical strength was tested by dropping a weight onto the structure. The teams that successfully created a durable structure were rewarded.',
          img: require('../../../assets/events/EPD19-1.jpg'),
          alt: 'Group photo of the team',
          id: 'egg19',
          show: false,
          groupImg : require('../../../assets/events/EPD19-2.jpg')
        },
        {
          title: 'FRC Bowling Competition',
          body: 'ASCE AlexSC Technical team ranked the second position in the FRC Bowling national competition held by ACI AAST.</b>',
          img: require('../../../assets/events/frc.jpg'),
          alt: 'Group photo of the winning team',
          id: 'frc',
          show: false
        },
        {
          title: 'BIM Competition 2019',
          body: 'Building Information Modeling competition targets Architectural, Civil and Construction engineering students.<br />It aims to provide future engineers with the required computational skills.<br />Also, BIM competition aims to bridge the gap between academics and real life applications.<br />Expected number of 30 participants, they will work together in groups to enhance their creativity, communication skills in addition to being capable to plan for an idea efficiently.<br />BIM Competition was held during the period starting from 1/8/2019 till 29/8/2019.<br />BIM Competition is expected to be held at Faculty of Engineering, Alexandria University.</b>',
          img: require('../../../assets/events/bim19.jpg'),
          alt: 'Group photo of the winning team',
          id: 'bim19',
          show: false
        },
        {
          title: 'Egg Protection Device 2017',
          body: 'ASCE Alex Uni SC WON The 1st Place in Egg Protection Device Competition. It was a great victory to see a team of 4 ASCE Alex SC members wining This National competition and making it among 40 teams from all the Egyptian universities held at AAST.<br /><b>Our Team was under Dr. Salah Al-Fitiany’s supervision.</b>',
          img: require('../../../assets/events/epd17.jpg'),
          alt: 'Group photo of the winning team',
          id: 'egg17',
          show: false
        },
      ],
      models : [
        {
          name : 'Team 1',
          archSrc: require('../../../assets/models/Team1Arch.jpg'),
          strSrc: require('../../../assets/models/Team1STR.jpg')
        },
        {
          name : 'Team 4',
          archSrc: require('../../../assets/models/Team4Arch.jpg'),
          strSrc: require('../../../assets/models/Team4STR.jpg')
        },
        {
          name : 'Team 5',
          archSrc: require('../../../assets/models/Team5Arch.jpg'),
          strSrc: require('../../../assets/models/Team5STR.jpg')
        },
        {
          name : 'Team 6',
          archSrc: require('../../../assets/models/Team6Arch.png'),
          strSrc: require('../../../assets/models/Team6STR.jpg')
        },
      ]
    }
  }
}
</script>

<style scoped>
.competitions{
  width: 80%;
  margin: auto;
}
.card{
  margin: 25px;
}
p{
  text-align: left;
}
.modelimg{
  width: 200px;
}
.compImg {
  width: 70%;
}

@media screen and (max-width: 992px){
  .competitions{width: 90%;}
  .card{margin: 50px;}
}

</style>
