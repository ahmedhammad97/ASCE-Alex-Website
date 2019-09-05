<template>
  <div class="visits">
    <h1>Visits</h1>

    <!-- Parameters of Vue-carousel -->
    <carousel id="carousel" :perPage="1" :centerMode="true" :navigationEnabled="true" :speed="1000" paginationActiveColor="#333" paginationColor="lightgrey" :minSwipeDistance="40">

      <slide class="slide" v-for="slide in slides" :key="slide.title">
        <h2>{{slide.title}}</h2>
        <p v-html="slide.body"></p>
        <b-img-lazy :src="slide.img" :blank-src="require('../../../assets/logoPlaceholder.jpg')" offset="800" :alt="slide.imgAlt" />
      </slide>

    </carousel>
    <br />

  </div>
</template>

<script>
export default {
  name: 'VisitsPage',
  data(){
    return{
      slides: [
        {
          title: 'Bashayer Alkhair Visit',
          body: 'ASCE Alex SC offered an onsite training opportunity in Bashayer Alkhair site under supervision of professors from Faculty of Engineering Alexandria University, for the students from the 2019 and 2020 batches.</b>',
          img: require('../../../assets/logoPlaceholder.jpg'),
          alt: 'Placeholder'
        },
        {
          title: 'ALSharqeya Site Visit for steel structures',
          body: 'In order to bridge the gap between academics and site experience, we managed a site visit to Al sharqeya where we can observe how steel structures are constructed as this type ofstructures aren’t common in Egypt.<br /><b>Number of participants: 15</b>',
          img: require('../../../assets/events/steelVisit.jpg'),
          alt: 'Group photo of the visit to AlSharqeya Site'
        },
        {
          title: 'Sidi Gaber Site Visit',
          body: 'In order to bridge the gap between academics and site experience, we managed a site visit to Sidi Gaber to observe the Construction works there.<br /><b>Number of Participants: 46</b>',
          img : require('../../../assets/events/sidiGaber.jpg'),
          imgAlt: 'Group photo to Sidi gaber bridge site'
        },
        {
          title: 'New Administrative Capital of Egypt Visit',
          body: 'This was the first visit to be launched from Alexandria University to the Mega projects in The New Administrative Capital of Egypt.<br /><b>Number of participants: 44</b>',
          img : require('../../../assets/events/newCap.jpg'),
          imgAlt: 'Group photo to New Admin Capital'
        },
        {
          title: 'Steel Site Field Trip',
          body: 'As we believe that being involved in the labor market can enhance the students\' skills and knowledge, we visited this under construction Steel Structures site under the supervision of AlexSteel Company.<br />The trip was for the 3rd and 4th year students according to the faculty syllabuses to make sure that the students get the most benefits of it.<br /><b>Speaker: Eng. Ahmed Saeed the project manager of the site.</b>',
          img : require('../../../assets/events/steel.jpg'),
          imgAlt: 'Group photo to Steel site field'
        },
      ]
    }
  }
}
</script>

<style scoped>
#carousel{
  width: 80%;
  margin: auto;
  margin-top: 40px;
}
.slide img{
  width: 90%;
}
.slide h2{
  font-weight: bold;
}
</style>
