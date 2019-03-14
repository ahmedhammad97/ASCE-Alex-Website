<template>
  <div class="courses">

    <h1>Courses</h1>
    <br />

    <b-card no-body class="courseBody">
      <b-tabs card>

      <b-tab title="STAAD Pro - Training course" active>
        <b-card-text class="courseText">
          <p>In cooperation with Bentley Systems for software we organized a training course about the STAAD Pro software, and attached is the agenda of the two days event. <br />It was a new software for the students to deal with in addition the training was free of charges which made it even possible for them to attend.</p>
          <p><b>Speaker: Eng. BISWATOSH DAS PURKAYASTHA</b></p>
          <img src="../../../assets/events/c16.jpg" alt="" class="courseImg">
        </b-card-text>
      </b-tab>

      <b-tab title="Summer Courses">
        <b-card-text>
          <p>Civil and architectural engineers should stay on track with the day to day advancement in the industry. By attaining and developing their computational skills and advancing it to compete in the booming industry.</p>
          <h3>Objectives</h3>
          <ul>
            <li>Utilize computational software in the civil and architectural departments.</li>
            <li>Advance in the technology of modeling, analyzing and designing.</li>
            <li>Acknowledge of the impact of engineering technology solutions on the industry.</li>
            <li>Demonstrate the ability of problem solving in a highly efficient, accelerated form.</li>
          </ul>
          <h3>Offered courses</h3>
          <ul>
            <li>Autodesk Revit Structure</li>
            <li>Autodesk Navisworks</li>
            <li>Primavera</li>
            <li>Revit Architecture</li>
            <li>Professional Site Engineer Diploma</li>
            <li>SAP2000</li>
            <li>Tekla Structure</li>
            <li>IELTS Preparation course</li>
          </ul>
        </b-card-text>
      </b-tab>

    </b-tabs>
  </b-card>

  </div>
</template>

<script>
export default {
  name: 'CoursesPage',
  methods: {

  }
}
</script>

<style scoped>
.courseBody{
  width: 90%;
  margin: auto;
  text-align: left;
}
.courseImg{
  width: 90%;
}
li{
  list-style-type: none;
  padding: 10px;
  list-style-type: square;
}
</style>
