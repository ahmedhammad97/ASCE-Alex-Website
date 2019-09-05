<template>
  <div class="courses">
    <h1>Courses</h1>
    <br />

    <b-card no-body class="courseBody" active>
      <b-tabs card>

      <b-tab title="Mechatsruct Academy">
        <b-card-text>
          <h2>Partnership with Mechatsruct Academy</h2>
          <br />
          <p>We cooperated with ASME Alex SS in developing a specialized academy that offers high quality courses with reasonable prices for engineering students in Civil and Mechanical Engineering.</p>
          <br />
          <h4>Offered courses</h4>
          <ul>
            <li>BIM Diploma</li>
            <li>Civil Diploma</li>
            <li>Technical Office</li>
            <li>Revit Architecture</li>
            <li>Site Diploma</li>
            <li>Primavera</li>
            <li>ANSYS</li>
            <li>Heat Exchangers</li>
            <li>Hydraulics</li>
            <li>Sealing and Shaft Alignment</li>
            <li>Six Sigma</li>
            <li>TurboMachinery</li>
            <li>SolidWorks</li>
          </ul>
        </b-card-text>
      </b-tab>

      <b-tab title="Summer Courses">
        <b-card-text>
          <p>Civil and architectural engineers should stay on track with the day to day advancement in the industry. By attaining and developing their computational skills and advancing it to compete in the booming industry.</p>
          <h4>Objectives</h4>
          <ul>
            <li>Utilize computational software in the civil and architectural departments.</li>
            <li>Advance in the technology of modeling, analyzing and designing.</li>
            <li>Acknowledge of the impact of engineering technology solutions on the industry.</li>
            <li>Demonstrate the ability of problem solving in a highly efficient, accelerated form.</li>
          </ul>
          <h4>Offered courses</h4>
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

      <b-tab title="STAAD Pro">
        <b-card-text class="courseText">
          <p>In cooperation with Bentley Systems for software we organized a training course about the STAAD Pro software, and attached is the agenda of the two days event. <br />It was a new software for the students to deal with in addition the training was free of charges which made it even possible for them to attend.</p>
          <p><b>Speaker: Eng. BISWATOSH DAS PURKAYASTHA</b></p>
          <b-img-lazy :src="require('../../../assets/events/staad16.jpg')" :blank-src="require('../../../assets/logoPlaceholder.jpg')" offset="800" alt="Group image of the participants" class="courseImg"/>
        </b-card-text>
      </b-tab>

    </b-tabs>
  </b-card>

  </div>
</template>

<script>
export default {
  name: 'CoursesPage'
}
</script>

<style scoped>
.courseBody{
  width: 90%;
  margin: auto;
  text-align: left;
}
.courseImg{
  width: 70%;
}
li{
  list-style-type: none;
  padding-bottom: 5px;
  list-style-type: square;
  font-size: 18px;
}
</style>
