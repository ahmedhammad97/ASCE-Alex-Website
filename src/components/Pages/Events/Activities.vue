<template>
  <div class="activities">
    <h1>Community Activities</h1>
    <br />

    <div v-for="activity in activities" :key="activity.title" :class="activity.style" class="activity">
      <b-row class="activityRow">

        <b-col sm="12" md="6" class="activityCol">
          <h2>{{activity.title}}</h2>
          <p>{{activity.body}}</p>
        </b-col>

        <b-col sm="12" md="6" class="activityCol"><img :src="activity.img" :alt="activity.alt"/></b-col>

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
          title: 'Munich university internship in cooperation with Alexandria university',
          body: 'Regarding the cooperation between the two universities we were responsible for the selection phase to make sure the selected students were the best to represent the university, we followed up with the interns the whole duration which was 6 weeks starting on 23rd April 2016.',
          img: require('../../../assets/events/internship.jpg'),
          alt: 'ASCE Flag raised from Munich',
          style: 'dark'
        },
        {
          title: 'The 9th Alexandria International Conference on Structural and Geotechnical Engineering.',
          body: 'As a result, for being a good representative front for the senior civil engineers in Alexandria, ASCE Alex Student Chapter members were invited to attend and organize AICSGE 9. It lasted for 4 days in which the members gained a lot of knowledge.',
          img: require('../../../assets/events/geotechnical.jpg'),
          alt: 'Group photo with Dean of Faculty of Engineering',
          style: 'light'
        },
        {
          title: 'Hosting “HBRC”: (The National Housing and Building Research Center).',
          body: 'We hosted The National Housing and Building Research Center in our Faculty for 3 days, provided the center’s delegate with Booth and storage place, and facilitated the required permissions to allow them sell The Egyptian Construction and Specs Code and Various construction references to the students within the campus with special prices.',
          img: require('../../../assets/events/HBRC.jpg'),
          alt: 'HBRC banner',
          style: 'dark'
        },
        {
          title: 'Organized the Egyptian Engineers Syndicate’s Ceremony.',
          body: 'We were invited to organize a ceremony for The National Engineers Syndicate for honoring the outstanding students in the different ages.',
          img: require('../../../assets/events/cermony.jpg'),
          alt: 'Group image of participants',
          style: 'light'
        },
        {
          title: 'Activity Fair',
          body: 'We participated in the Activity Fair at Faculty of Engineering Alexandria University. Our aim was to encourage students to try several workshops in order to enhance their hands-on experience and develop their creativity.',
          img: require('../../../assets/events/fair19.jpg'),
          alt: 'ASCE info desk',
          style: 'dark'
        },
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.activity img{
  width: 90%;
  margin: auto;
  border: 2px solid #19a1cf;
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
