<template>
  <div class="about">
    <h1>About The American Society of Civil Engineers</h1>
    <article>
      <light-timeline :items='items' class="timeline"></light-timeline>
      <p class="globalAsce">To know more about ASCE, please visit <a href="http://www.ASCE.org" target="_blank">http://www.ASCE.org</a></p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      items: [
        {
          color: '#19a1cf',
          content: 'The American Society of Civil Engineers (ASCE), the oldest national professional engineering society, was founded in 1852 with an objective to enhance the welfare of humanity by advancing the science and profession of civil engineering. More than 150,000 individual ASCE members are engaged in engineering education, research, public agency, industrial, construction, and private engineering practice.\nThe Society’s mission, goals and objectives are implemented by a structure of volunteers in ten Regions, 93 Sections, 155 Branches, and 328 Student Chapters.',
        },
        {
          color: '#19a1cf',
          content: `Faculty of Engineering, Alexandria University is a reputable faculty with a diverse base of students’ activities. Although, these activities were varied through different departments in the faculty, Civil and Architectural Engineering departments didn’t enjoy such a privilege to have students’ activities arms that serve such two important majors. Students were thrilled to see such a service in their departments through their years of study. For those reasons, two students from Civil engineering department had the desire to change that situation by delivering the service for those two departments. They made huge effort to explore different options in order to deliver that service in the right way to suit the department’s needs.\nTheir starting point was to launch a conference that offers new topics exclusively for civil and architectural engineering students to enhance their educational process and to tap a new world of possibilities for their career development journey.`
        },
        {
          color: '#19a1cf',
          content: `After the success of the construction conference team, the founders founded that an annual event wouldn’t satisfy all the needs for students in that period. They wanted to deliver diverse services during the academic year for the students. That was the reason of a better enhancement in their infrastructure. They changed the name of the team to be Construction team and started to expand their team capabilities to be able to deliver these diverse services with innovative ways. Their contributions are defined below.`
        },
        {
          color: '#19a1cf',
          content: `ASCE Alexandria Student Chapter was founded in January 2016 after creating a grand base for its activities under the name of Construction team over 3 years full of diverse activities for the students specializing in Civil & Architectural Engineering. Construction team has developed over the last 3 years dramatically in its bases and skills for a better delivery of its services to students and those developments.\n\nASCE Alex SC is seeking high quality services to the students it serves and that will be achieved only through a standardized workflow structure that ensures the consistency and the quality of the outputs performed by members in the student chapter. ASCE Alex SC members have accumulated the skills and the experiences required to deliver standard outputs over its operation years. Those experiences were concluded in a series of work protocols and management products that fits the vision and the mission of ASCE SC Alex.`
        }
      ]
    }
  }
}
</script>

<style scoped>
.about{
  text-align: left;
  padding-left: 50px;
}
h1{
  margin-left: 80px;
}
.globalAsce{
  margin-left: 80px;
  margin-top: 30px;
}
.timeline{
  font-size: 17px;
  padding-right: 50px;
  color: #333
}
@media screen and (max-width: 992px) {
  .about{padding-left: 10px;}
  h1{
    margin: 10px;
    font-size: 27px;
    text-align: center;
  }
  .globalAsce{
    margin-left: 20px;
    margin-right: 10px;
    font-size: 12px;
    text-align: center;
  }
  .timeline{
    margin-left: -50px;
    font-size: 15px;
    padding-right: 15px;
  }
}
</style>
