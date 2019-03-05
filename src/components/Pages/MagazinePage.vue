<template>
  <div class="magazine">
    <p class="intro">At ASCE (American Society of Civil Engineers), we worked on providing the important scientific content through our annual mega event "the construction conference" and seminars. Yet, we found the significance of presenting the latest topics and technology in civil and architecture engineering in a form of magazine that is published every six months.<br />The magazine content covers the latest and modern and remarkable moves  in construction and architecture field. Thus, we can cope with our era's technology since we are the future leaders of engineering!<br /><br />ASCE AlexSC magazine first edition:<br /></p>
    <div class="issuuMag">
      <h2>English version</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=english" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>
    <br />
    <div class="issuuMag">
      <h2>Arabic version</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=arabic__2_" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  name: 'MagazinePage',
  methods: {

  }
}
</script>

<style scoped>
.intro{
  padding: 20px;
  font-size: 20px;
  text-align: left;
  width: 80%;
  margin: auto;
}
.issuuMag{
  width: 80%;
  margin: auto;
}
.issuuMag h2{
  background-color: #4C4C4C;
  color: white;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: bold;
  opacity: 0.9;
  margin-bottom: 0px;
}
@media screen and (max-width: 992px) {
  .intro {
    font-size: 20px;
    width: 90%;
  }
  .issuuMag{
    width: 100%;
  }
}
</style>
