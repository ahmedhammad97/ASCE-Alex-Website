<template>
  <div class="volunteers">
    <h1>ASCE Alex Family</h1>
    <br />

    <div class="board" >

      <div class="president">
        <b-row>
          <b-col sm="12" class="avatar">
            <b-img-lazy :src="require('../../assets/members/Khaiat.jpg')" :blank-src="require('../../assets/placeholder.png')" alt="President"/>
            <p class="name">Mohamed El-Khaiat</p>
            <p class="role">President</p>
          </b-col>
        </b-row>
      </div>

      <div class="viceAndTreasurer">
        <b-row>
          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../../assets/members/MennaAllah.jpg')" :blank-src="require('../../assets/placeholder.png')" alt="Vice President"/>
            <p class="name">MennaAllah Mohamed</p>
            <p class="role">Vice President</p>
          </b-col>

          <b-col sm="12" md="6" class="avatar">
            <b-img-lazy :src="require('../../assets/members/Shaimaa.jpg')" :blank-src="require('../../assets/placeholder.png')" alt="Treasurer"/>
            <p class="name">Shaimaa Abdullah </p>
            <p class="role">Treasurer</p>
          </b-col>
        </b-row>
      </div>
      <br /><br />

      <div class="restOfBoard">
        <b-row>
          <b-col class="avatar" v-for="member in boardMembers" :key="member.name">
            <b-img-lazy :src="member.image" :blank-src="require('../../assets/placeholder.png')" offset="700" v-bind:alt="member.name"/>
            <p class="name">{{member.name}}</p>
            <p class="role">{{member.role}}</p>
          </b-col>
        </b-row>
      </div>

      <div class="divider"></div><br />

      <div class="Committee" v-for="Committee in committies" :key="Committee.name">
        <h2>{{Committee.name}} Committee Members</h2>
        <ul class="members">
          <li v-for="member in Committee.members" v-bind:key="member"><span>{{member}}</span></li>
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
          name: 'Fatma Morsi',
          role: 'Academic Committee Head',
          image: require('../../assets/members/Fatma.jpg')
        },
        {
          name: 'Mohamed Farrag',
          role: 'Academic Committee Vice Head',
          image: require('../../assets/members/Farrag.jpg')
        },
        {
          name: 'Eslam Adel',
          role: 'Human Resources Committee Head',
          image: require('../../assets/members/Eslam.jpg')
        },
        {
          name: 'Mohamed Amer',
          role: 'Human Resources Committee Vice Head',
          image: require('../../assets/members/Amer.jpg')
        },
        {
          name: 'Aya Mamdouh',
          role: 'Organization and Logistics Committee Head',
          image: require('../../assets/members/Aya.jpg')
        },
        {
          name: 'Marwa Samir',
          role: 'Organization and Logistics Committee Vice Head',
          image: require('../../assets/members/Marwa.jpg')
        },
        {
          name: 'Amr El-Handoum',
          role: 'Media and Marketing Committee Head',
          image: require('../../assets/members/Amr.jpg')
        },
        {
          name: 'Nada El-Sharkawy',
          role: 'Media and Marketing Committeee Vice Head',
          image: require('../../assets/members/Nada.jpg')
        },
        // {
        //   name: 'Nour Balbaa',
        //   role: 'Public Relations and Fund Raising Committee Vice Head',
        //   image: require('../../assets/members/NourBalbaa.jpg')
        // },
        {
          name: 'Shrouk Mohamed',
          role: 'Technical Committee Head',
          image: require('../../assets/members/Shrouk.jpg')
        },
        {
          name: 'Ahmed Hammad',
          role: 'Software Unit Head',
          image: require('../../assets/members/AhmedHammad.jpg')
        }
      ],
      committies: [
          {
            name: 'Academic',
            members: [
              'Shimaa ahmed ',
              'Norhan nasser',
              'Shery magdy',
              'Shaza mostafa ',
              'Mariam ahmed ',
              'Rafy Vector',
              'Mohamed hamdy',
              'Mohamed mostafa ',
              'Nermeen shawky',
            ]
          },
          {
            name: 'Technical',
            members:[
              'Mahmoud fiekry Anwar',
              'Mohamed Gaber Sayed',
              'Mohamed Khaled Naser',
              'hager elwakil',
              'hiedy rostom',
              'Israa Ahmed',
              'Mohamed Hazem Ismael',
              'Ahmed Tarek Hamada',
              'Aya Hassan Ibrahim',
              'Hamdy Mahmoud',
              'Abanoub Halim',
              'Rana Ali Saed',
              'Ahmed Adel Mostafa',
              'Mohamed Yasser',
              'Yasmien Ibrahim',
              'Omnia Mohey Amir',
              'Alaa Gaber',
              'Omar Hassan Elkomy ',
            ]
          },
          {
            name: 'Human Resources',
            members:[
              'Asmaa Elmesery',
              'Mohammed belal mohammed',
              'Ahmed Hassan Mostafa',
              'Asmaa Galal',
              'Moahmed Malek',
              'Hisham Adel',
              'Youmna ElGizawy',
            ]
          },
          {
            name: 'Organization and Logistics',
            members:[
              'Walaa Waleed ',
              'Hadeer Khaled',
              'Mohamed Saad',
              'Shehab Alaa',
              ' Mariam Elsayed',
              'Omar Ashraf',
              'Ahmed Ibrahim',
              'Ahmed Yasser',
              'El Sayed Mohamed',
              'Amr Ali El Halafawy',
              'Tasneem Mansour',
              'Fayez Saeed',
              ' Alaa Baheeg',
              ' Mohamed Fawzy',
            ]
          },
          {
            name: 'Public Relations and Fund Raising',
            members:[
              'Ahmed Belal Elsayed',
              'Khloud Mohamed Saad',
              'Joseph Amin Ramzy',
              'Ahmed Mustafa Ghanem',
              'Mohamed Ahmed Ragab',
              'Gaber Mohamed Gaber Salem',
            ]
          },
          {
            name: 'Media and Marketing',
            members:[
              'Amar Hesham El-Rasad',
              'Ahmed El-Adawy',
              'Muhammad Saeed',
              'Alaa Hamdy Mohamed',
              'yara gomaa',
              'Rwan Mohamed Ali',
              'Sara Adel',
              'Toqa Ehab Mohamed Amin',
              'Sara Hossam',
            ]
          }
      ]
    }
  }
}
</script>

<style scoped>
.volunteers{
  width: 90%;
  margin: auto;
}
h2{
  background-color: #0c5fa8;
  color: white;
  padding: 10px;
  border-radius: 30px;
}

.avatar img{
  border-radius: 50%;
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
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
