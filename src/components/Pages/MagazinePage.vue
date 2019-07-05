<template>
  <div class="magazine">
    <h1>ASCE Alex Digital Magazine</h1>
    <p class="intro">At ASCE (American Society of Civil Engineers), we worked on providing the important scientific content through our annual mega event "the construction conference" and seminars. Yet, we found the significance of presenting the latest topics and technology in civil and architecture engineering in a form of magazine that is published every six months.<br />The magazine content covers the latest and modern and remarkable moves  in construction and architecture field. Thus, we can cope with our era's technology since we are the future leaders of engineering!<br /><br /></p>

    <div class="issuuMag">
      <h2>Second Edition - English</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=english_version" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>
    <br />

    <div class="issuuMag">
      <h2>Second Edition - Arabic</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=arabic_version" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>

    <br /><br /><br />

    <div class="issuuMag">
      <h2>First Edition - English</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=english" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>
    <br />

    <div class="issuuMag">
      <h2>First Edition - Arabic</h2>
      <iframe src="https://e.issuu.com/anonymous-embed.html?u=ascealexsc1&d=arabic__2_" style="border:none;width:100%;height:500px;" allowfullscreen></iframe>
    </div>

    <br />
  </div>
</template>

<script>
export default {
  name: 'MagazinePage'
}
</script>

<style scoped>
.intro{
  padding: 20px;
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
    width: 90%;
  }
  .issuuMag{
    width: 100%;
  }
}
</style>
