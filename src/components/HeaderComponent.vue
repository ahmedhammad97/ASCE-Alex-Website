<template>
  <div class="headerComponent">
    <b-navbar class="bnavbar" toggleable="md" type="light" variant="light" fixed="top">

    <b-navbar-brand><router-link to="/">
      <!-- Logo rendered as background to this span -->
      <span id="logo"></span>
    </router-link></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav class="ml-auto">

          <b-navbar-nav>
            <b-nav-item><router-link class="item" to="/about">ABOUT</router-link></b-nav-item>
            <b-nav-item><router-link class="item" to="/magazine">MAGAZINE</router-link></b-nav-item>

            <b-nav-item-dropdown id="dropdown" right >
              <template slot="button-content"><span class="item">EVENTS</span></template>
              <b-dropdown-item id="megaEvent"><router-link class="events" to="/events/conference">Construction Conference</router-link></b-dropdown-item>
              <b-dropdown-item><router-link class="events" to="/events/visits">Visits</router-link></b-dropdown-item>
              <b-dropdown-item><router-link class="events" to="/events/seminars">Seminars</router-link></b-dropdown-item>
              <b-dropdown-item><router-link class="events" to="/events/courses">Courses</router-link></b-dropdown-item>
              <b-dropdown-item><router-link class="events" to="/events/competitions">Competitions</router-link></b-dropdown-item>
              <b-dropdown-item><router-link class="events" to="/events/activities">Community Activities</router-link></b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item><router-link class="item" to="/volunteers">VOLUNTEERS</router-link></b-nav-item>
            <b-nav-item target="_blank" href="https://www.facebook.com/ASCEalexSC"><span class="item">CONTACT US</span></b-nav-item>
          </b-navbar-nav>

      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style scoped>
.headerComponent{
  margin-bottom: 100px;
  z-index: 999999;
}
.item{
  color: #333;
  text-decoration: none;
  padding: 10px;
  transition: all 0.2s ease-in-out;
}
.item:hover{
  border-bottom: 3px solid #0c5fa8;
  color: #0c5fa8;
}
.events{
  color: #333;
  text-decoration: none;
  padding: 10px;
}
#megaEvent{
  background-color: #0c5fa8 !important;
}
#megaEvent .events{
  color: white;
}
#logo{
  height: 130.2px;
  width: 150px;
  position: absolute;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -20px;
  background-image: url('../assets/logo.png');
  border: 2px solid #0c5fa8;
  box-shadow: 0 2px 3px #333;
}
@media screen and (max-width: 992px) {
  #logo {
    height: 87.6px;
    width: 100px;
  }
}
</style>
