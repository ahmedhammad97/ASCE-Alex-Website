<template>
  <div class="conference">
    <h1>Construction Conference</h1>
    <br />

    <section class="vision">
      <h2>Vision</h2>
      <p>Our vision was to improve the attendees' skills and enrich them with good variety of information about the latest technology in the construction field.</p>
    </section>

    <section class="mission">
      <h2>Mission</h2>
      <p>One of the main problems that face engineers in our country is the lack of knowledge about modern technologies used nowadays to construct the future and not being able to release their imagination due to the shortage of real life constructed examples to practice on and add to it. Overcoming this problem is what “Construction Conference” seeking for, in addition to guide engineers to new creative tracks of research and development to create a new generation which will lead our country to an actual revolution in the world of Construction.</p>
    </section>

    <section class="objectives">
      <h2>Objectives</h2>
      <ul>
        <li>Develop engineering students’ competencies.</li>
        <li>Ensure that engineering students are aware of their responsibilities as future engineers.</li>
        <li>Increase Hands-on experience throughout innovative workshops.</li>
      </ul>
    </section>

    <br /><br />

    <section class="tabs">
      <b-card no-body>
        <b-tabs pills card>

          <b-tab title="Conference '18" active><b-card-text>
            <p><i>The Conference took place in 3 consecutive days, having a variety of academic sessions and case study talks. In order to achieve our objectives, Construction Conference’18 focused on three main themes as follows:</i></p>
            <br />

            <h4>Transportation Engineering:</h4>
            <p>Nowadays, transportation planning has become one of the most significant engineering branches all over the world. It includes several Construction and Architectural aspects which will be discussed profoundly throughout the sessions.</p>
            <br />

            <h4>Environmental Engineering</h4>
            <p>One of the leading engineering branches, which is concerned with energy efficiency, sustainable design, up cycling and recycling in order to construct buildings with a net positive environmental impact. Several topics are enrolled in this theme.</p>
            <br />

            <h4>Significant Engineering Topics</h4>
            <p>There are various topics that we as students or even junior engineers know nothing about. Thus, this theme aims to present interesting topics that we barely hear about.</p>

            <center>
              <h4><b>Sponsors and Parteners</b></h4>
              <br />
              <ul>
                <li v-for="sponsor in sponsors" class="sponsor" :id="sponsor.id" :key="sponsor.id">
                  <img :src="sponsor.url" :alt="sponsor.name + ' logo'" class="sponsorImg">
                </li>
              </ul>
            </center>

            <b-tooltip v-for="sponsor in sponsors" :target="sponsor.id" :key="sponsor.id">
              <span>{{sponsor.name}}</span>
            </b-tooltip>
            <br />

            <h4>Timeline</h4>
            <p>Construction Conference’ 18 took place in the 3rd, 4th and 5th of September 2018 in Faculty of Engineering Alexandria University.</p>
            <br />

            <b-img-lazy :src="require('../../../assets/events/c18.jpg')" :blank-src="require('../../../assets/logoPlaceholder.jpg')" offset="800" alt="Construction Conference '18 group photo" class="groupPhoto" />

          </b-card-text></b-tab>

          <b-tab title="Conference '16"><b-card-text>
            <h4>Our Methodology was:</h4>
            <p><i>"We shape our buildings; thereafter they shape us."</i></p>
            <br />

            <h4>The content of C’16 aimed to achieve its objectives through:</h4>
            <ul>
              <li>Defining the qualifications that any engineer must have to help designing our future using creativity and hard work through workshops to stimulate their hidden abilities to reach more.</li>
              <li>Expand the perception of our young engineers by showing them new perspectives used in construction nowadays such as Skyscrapers, green buildings and under water construction to achieve the urbanization of mankind and that’s through intensive sessions given by trusted engineers.</li>
              <li>These sessions and workshops were mainly dedicated to provide students with the most advanced programs and its applications in  construction  and designing process nowadays including the project management applications.</li>
            </ul>
            <br />

            <h4>Timeline</h4>
            <p>The Conference was held on Monday, Tuesday, and Wednesday – 5th, 6th, and 7th September, 2016.</p>
            <br />

            <b-img-lazy :src="require('../../../assets/events/c16.jpg')" :blank-src="require('../../../assets/logoPlaceholder.jpg')" offset="800" alt="Construction Conference '16 group photo" class="groupPhoto" />
          </b-card-text></b-tab>

        </b-tabs>
      </b-card>
    </section>
    <br /><br />

  </div>
</template>

<script>
export default {
  name: 'ConferencePage',
  data(){
    return{
      sponsors: [
        {
          name: 'Amreya Cement',
          id: 'amreyaCement',
          url: require('../../../assets/sponsors/amreyaCement.jpg')
        },
        {
          name: 'Mancrew',
          id: 'manCrew',
          url: require('../../../assets/sponsors/manCrew.jpg')
        },
        {
          name: 'Buckets',
          id: 'buckets',
          url: require('../../../assets/sponsors/buckets.jpg')
        },
        {
          name: 'Fuman cheese',
          id: 'fumanCheese',
          url: require('../../../assets/sponsors/fumanCheese.jpg')
        },
        {
          name: 'Nola Cupcakes',
          id: 'nola',
          url: require('../../../assets/sponsors/nola.jpg')
        },
        {
          name: 'Burger Factory',
          id: 'burgerFactory',
          url: require('../../../assets/sponsors/burgerFactory.jpg')
        },
        {
          name: 'Villa Yacoub',
          id: 'villaYacoub',
          url: require('../../../assets/sponsors/villaYacoub.jpg')
        }
      ]
    }
  }
}
</script>

<style scoped>
.conference{
  padding-left: 80px;
  padding-right: 20px;
}
p, li{
  font-size: 18px;
}
li{
  list-style-type: square;
}
section{
  text-align: left;
}
.sponsor{
  padding: 10px;
  border-radius: 10px;
  margin: 15px;
  font-weight: bold;
  display: inline-grid;
}
.sponsorImg{
  width: 70px;
  border-radius: 10px;
}
.groupPhoto{
  width: 90%;
  border: 3px solid #19a1cf;
  border-radius: 10px;
  margin-left: 5%;
  margin-right: 5%;
}

@media screen and (max-width: 992px){
  .conference{
    padding-left: 20px;
  }
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 25px;
  }
  .sponsor{
    padding: 5px;
    margin: 5px;
  }
  ul{
    padding: 0;
    margin-left: 20px;
  }
}
</style>
