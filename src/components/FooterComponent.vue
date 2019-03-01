<template>
  <div class="footerComponent">
    <span class="title"><br />American Society of Civil Engineers | Alexandria Student Chapter</span>
    <br /><br />
    <span class="email"><span>
      <img src="../assets/icons/iconmail.png" />
    </span>info.ascealexsc@gmail.com</span>
    <div class="icons">
      <a href="https://www.facebook.com/ASCEalexSC" target="_blank"><span class="social">
        <img src="../assets/icons/iconfacebook.png" />
      </span></a>
      <a href="https://www.instagram.com/ascealexsc/" target="_blank"><span class="social">
        <img src="../assets/icons/iconinstagram.png" />
      </span></a>
      <a href="https://www.youtube.com/channel/UCjZodNGEHb691kBVNNGzoBg" target="_blank"><span class="social">
        <img src="../assets/icons/iconyoutube.png" />
      </span></a>
    </div>
    <div class="copyrights">
      All copyrights reserved 2019 © <a target="_blank" href="http://www.ahmedhammad.me">Ahmed Hammad</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
  methods: {

  }
}
</script>

<style scoped>
.footerComponent{
  background-color: #0c5fa8;
  color: white;
}
.title{
  font-size: 25px;
  font-weight: bold;
}
@media screen and (max-width: 992px) {
  .title{
    font-size: 19px;
  }
}
.email{
  font-size: 20px;
  font-weight: lighter;
}
.social{
  width: 64px;
  height: 64px;
  padding-left: 10px;
  padding-right: 10px;
}
.copyrights{
  background-color: black;
  opacity: 0.5;
  font-size: 13px;
  font-weight: bold;
}
a{color: white; cursor: pointer;}
a:hover{color: white; text-decoration:none;}

</style>
