<template>
  <div class="volunteers">
    <h1>ASCE ALEX Family</h1>
    <br />

    <div class="board" >

      <div class="president">
        <b-row>
          <b-col sm="12" class="avatar">
            <img src="../../assets/members/avatar.png" alt="President">
            <p class="name">Nour El Heweity</p>
            <p class="role">President</p>
          </b-col>
        </b-row>
      </div>

      <div class="viceAndTreasurer">
        <b-row>
          <b-col sm="12" md="6" class="avatar">
            <img src="../../assets/members/avatar.png" alt="Vice President">
            <p class="name">Ibrahim Ashraf</p>
            <p class="role">Vice President</p>
          </b-col>

          <b-col sm="12" md="6" class="avatar">
            <img src="../../assets/members/avatar.png" alt="Treasurer">
            <p class="name">Mohamed Samak</p>
            <p class="role">Treasurer</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="restOfBoard">
        <b-row>
          <b-col class="avatar" v-for="member in boardMembers" :key="member.name">
            <img v-bind:src="member.image" v-bind:alt="member.name">
            <p class="name">{{member.name}}</p>
            <p class="role">{{member.role}}</p>
          </b-col>
        </b-row>
      </div>

      <div class="divider"></div><br />

      <div class="committe" v-for="committe in committies" :key="committe.name">
        <h2>{{committe.name}} Committe Members</h2>
        <ul class="members">
          <li v-for="member in committe.members" v-bind:key="member"><span>{{member}}</span></li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'VolunteersPage',
  data(){
    return {
      boardMembers: [
        {
          name: 'Mohamed Farrag',
          role: 'Academic Committe Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Mai El Zoherey',
          role: 'Human Resources Committe Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Abdallah Saad',
          role: 'Organization Committe Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Mostafa Hafez',
          role: 'Public Relations Committe Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Rawan Maher',
          role: 'Media Committe Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Mohamed El Khaiat',
          role: 'Academic Committe Vice Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Eslam Adel',
          role: 'Human Resources Committe Vice Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Mahmoud Ashraf',
          role: 'Organization Committe Vice Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Nour Balbaa',
          role: 'Public Relations Committe Vice Head',
          image: require('../../assets/members/avatar.png')
        },
        {
          name: 'Amr Shaher',
          role: 'Media Committe Vice Head',
          image: require('../../assets/members/avatar.png')
        }
      ],
      committies: [
          {
            name: 'Academic',
            members: [
              'Esraa Muhammad',
              'Rawan Aly',
              'Ahmed Saeed Mansour',
              'Sara Adel',
              'Mohamed Shalaby',
              'Heba Abd el rahman',
              'Mahmoud Abd elsabour',
              'Fatma Morsy',
              'Selim Mustafa'
            ]
          },
          {
            name: 'Technical',
            members:[
              'Moemen Shaltout',
              'Mohamed Hafez',
              'Mohamed Gaber',
              'Mohamed Hosny',
              'Reem Mostafa',
              'Shaimaa Abdallah',
              'Shrouk Mohamed',
              'Omar Ahmed Elsharif'
            ]
          },
          {
            name: 'Human Resources',
            members:[
              'Mostafa Mohamed',
              'Mohamed Gamal',
              'Hasnaa Abozad',
              'Eslam Gamal',
              'Nourhan Adel Mahmoud',
              'Hamdy Mahmoud Amin',
              'Mohamed Amer',
              'Mohamed Adel Mohamed'
            ]
          },
          {
            name: 'Organization and Logistics',
            members:[
              'Mohamed Assy',
              'Mohamed Sdik',
              'Aya Mahmdouh',
              'Aya Nasser',
              'Omar El Touny',
              'Mohamed Marzouk',
              'Yasmine Bassem',
              'Yasmine Khalil',
              'Karim Fawzy',
              'Ahmed Samir',
              'Mahmoud Morsy',
              'Khaled Elaraby',
              'Rana Abubasha',
              'Mohamed Hamdy Derbala',
              'Nada Ashraf',
              'Rafael Vector',
              'Asmaa Mahmoud',
              'Habiba Mohamed',
              'Donia Muhammed Hassan',
              'Mahmoud Said',
              'Marwa samir abd el hamid',
              'Mohamed Adel',
              'Asmaa El-Messiry',
              'Nourhan Essam',
              'Mohamed Abdo'
            ]
          },
          {
            name: 'Public Relations',
            members:[
              'Mahmoud Sherif',
              'Ghada Salah',
              'Abdallah Magdi',
              'Mohamed Habib',
              'Ahmed ElDafrawi',
              'Mahmoud Shalabi',
              'Mohamed Jacob'
            ]
          },
          {
            name: 'Media and Marketing',
            members:[
              'Abdallah Awad',
              'Omar Ward',
              'Alyaa Ali',
              'Mostafa Gamaly',
              'Nada Ahmed',
              'Nada Elsharkawy',
              'Marawan Elabbady',
              'Amr Elhandoum',
              'Sara Hossam',
              'Menna Mohamed'
            ]
          }
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.volunteers{
  width: 90%;
  margin: auto;
}
h1{
  font-size: 40px;
}
h2{
  font-size: 30px;
  background-color: #0c5fa8;
  color: white;
  padding: 10px;
  border-radius: 30px;
}

.avatar img{
  border-radius: 50%;
  width: 200px;
  margin-bottom: 20px;
}
.avatar p{
  font-size: 20px;
}
.avatar .name{
  font-weight: bold;
  margin-bottom: 0;
}
.divider{
  background-image: url('../../assets/divider.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 100%;
  height: 100px;
}
.members li{
  display: inline-grid;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
  font-weight: bold;
}

@media screen and (max-width: 992px) {
  h2 {
    font-size: 25px;
  }
  .members li{
    width: 95%;
  }
}
</style>
