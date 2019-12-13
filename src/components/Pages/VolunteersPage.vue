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
          name: 'Eslam Adel',
          role: 'Human Resources Committee Head',
          image: require('../../assets/members/Eslam.jpg')
        },
        {
          name: 'Aya Mamdouh',
          role: 'Organization and Logistics Committee Head',
          image: require('../../assets/members/Aya.jpg')
        },
        {
          name: 'Shrouk Mohamed',
          role: 'Technical Committee Head',
          image: require('../../assets/members/Shrouk.jpg')
        },
        {
          name: 'Amr El-Handoum',
          role: 'Media and Marketing Committee Head',
          image: require('../../assets/members/Amr.jpg')
        },
        {
          name: 'Mohamed Farrag',
          role: 'Academic Committee Vice Head',
          image: require('../../assets/members/Farrag.jpg')
        },
        {
          name: 'Mohamed Amer',
          role: 'Human Resources Committee Vice Head',
          image: require('../../assets/members/Amer.jpg')
        },
        {
          name: 'Marwa Samir',
          role: 'Organization and Logistics Committee Vice Head',
          image: require('../../assets/members/Marwa.jpg')
        },
        // {
        //   name: 'Nour Balbaa',
        //   role: 'Public Relations and Fund Raising Committee Vice Head',
        //   image: require('../../assets/members/NourBalbaa.jpg')
        // },
        {
          name: 'Nada El-Sharkawy',
          role: 'Media and Marketing Committeee Vice Head',
          image: require('../../assets/members/Nada.jpg')
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
              'Esraa Muhammad',
              'Rawan Aly',
              'Ahmed Saeed Mansour',
              'Sara Adel',
              'Mohamed Shalaby',
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
              'Karim Fawzy',
              'Ahmed Samir',
              'Mahmoud Morsy',
              'Khaled Elaraby',
              'Mohamed Hamdy Derbala',
              'Nada Ashraf',
              'Rafael Vector',
              'Asmaa Mahmoud',
              'Habiba Mohamed',
              'Mahmoud Said',
              'Marwa samir abd el hamid',
              'Mohamed Adel',
              'Asmaa El-Messiry',
              'Nourhan Essam',
              'Mohamed Abdo'
            ]
          },
          {
            name: 'Public Relations and Fund Raising',
            members:[
              'Mahmoud Sherif',
              'Abdallah Magdi',
              'Ahmed ElDafrawi',
            ]
          },
          {
            name: 'Media and Marketing',
            members:[
              'Abdallah Awad',
              'Omar Ward',
              'Alyaa Ali',
              'Mostafa Gamaly',
              'Nada Elsharkawy',
              'Marawan Elabbady',
              'Amr Elhandoum',
              'Sara Hossam',
              'Menna Mohamed'
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
