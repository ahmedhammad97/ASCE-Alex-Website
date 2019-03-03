<template>
  <div class="error">
    <p><span class="oops">Oops!</span>
      <br />
      This page is not available, please visit a correct URL.
      <br /><br />
      <router-link to="/" id="back">Home Page</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'NotFoundPage',
  methods: {

  }
}
</script>

<style scoped>
p{
  font-size: 30px;
}
.oops{
  font-size: 50px;
}
#back{
  background-color: #0c5fa8;
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 30px;
  border: 2px solid #0c5fa8;
  transition: 0.3s ease-in-out;
}
#back:hover{
  text-decoration: none;
  background-color: transparent;
  color: #0c5fa8;

}
</style>
