<template>
  <div class="activities">
    <h1>Community Activities</h1>
    <br />

    <div v-for="(activity, index) in activities" :key="activity.title" :class="index%2===0?'dark':'light'" class="activity">
      <b-row class="activityRow">

        <b-col sm="12" md="6" class="activityCol">
          <h2>{{activity.title}}</h2>
          <p>{{activity.body}}</p>
        </b-col>

        <b-col sm="12" md="6" class="activityCol"><b-img-lazy :src="activity.img" :blank-src="require('../../../assets/logoPlaceholder.jpg')" offset="500" :alt="activity.alt"/></b-col>

      </b-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ActivitiesPage',
  data(){
    return{
      activities: [
        {
          title: 'Activity Fair \'19',
          body: 'We participated in the Activity Fair at Faculty of Engineering Alexandria University. Our aim was to encourage students to try several workshops in order to enhance their hands-on experience and develop their creativity.',
          img: require('../../../assets/events/fair19.jpg'),
          alt: 'ASCE info desk',
        },
        {
          title: 'GeoMeast Conference ‘18',
          body: 'ASCE AlexSC presented at the GeoMeast Conference that took place in November 2018 in the Mena House, Cairo. We had an open discussion with Dr Robin Kemper “Mrs ASCE President” and other ASCE student chapters in Egypt, such as ASCE GUC and ASCE ZAGAZIG.',
          img: require('../../../assets/events/geomast.jpg'),
          alt: 'Image of board members at the Conference',
        },
        {
          title: 'Activity Fair \'18',
          body: 'We participated in the Activity Fair at Faculty of Engineering Alexandria University. Our aim was to encourage students to try several workshops in order to enhance their hands-on experience and develop their creativity.',
          img: require('../../../assets/events/fair19.jpg'),
          alt: 'ASCE info desk',
        },
        {
          title: 'Organized the Egyptian Engineers Syndicate’s Ceremony.',
          body: 'We were invited to organize a ceremony for The National Engineers Syndicate for honoring the outstanding students in the different ages.',
          img: require('../../../assets/events/cermony.jpg'),
          alt: 'Group image of participants',
        },
        {
          title: 'Hosting “HBRC”: (The National Housing and Building Research Center).',
          body: 'We hosted The National Housing and Building Research Center in our Faculty for 3 days, provided the center’s delegate with Booth and storage place, and facilitated the required permissions to allow them sell The Egyptian Construction and Specs Code and Various construction references to the students within the campus with special prices.',
          img: require('../../../assets/events/HBRC.jpg'),
          alt: 'HBRC banner',
        },
        {
          title: 'The 9th Alexandria International Conference on Structural and Geotechnical Engineering.',
          body: 'As a result, for being a good representative front for the senior civil engineers in Alexandria, ASCE Alex Student Chapter members were invited to attend and organize AICSGE 9. It lasted for 4 days in which the members gained a lot of knowledge.',
          img: require('../../../assets/events/geotechnical.jpg'),
          alt: 'Group photo with Dean of Faculty of Engineering',
        },
        {
          title: 'Munich university internship in cooperation with Alexandria university',
          body: 'Regarding the cooperation between the two universities we were responsible for the selection phase to make sure the selected students were the best to represent the university, we followed up with the interns the whole duration which was 6 weeks starting on 23rd April 2016.',
          img: require('../../../assets/events/internship.jpg'),
          alt: 'ASCE Flag raised from Munich',
        },
      ]
    }
  }
}
</script>

<style scoped>
.activity img{
  width: 40%;
  margin: auto;
  border: 2px solid #19a1cf;
  border-radius: 10px;
}
.activityRow{width: 100%; margin: auto; padding: 20px;}
.dark{
  background-color: #333;
  color: white;
}
.light{
  background-color: white;
  color: #333;
}

</style>
