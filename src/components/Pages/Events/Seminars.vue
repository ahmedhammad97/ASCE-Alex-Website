<template>
  <div class="seminars">

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion1 variant="info">Accordion 1</b-button>
      </b-card-header>
      <b-collapse id="accordion1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <p class="card-text">I start opened because <code>visible</code> is <code>true</code></p>
          <p class="card-text">Bla Bla</p>
        </b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion2 variant="info">Accordion 2</b-button>
      </b-card-header>
      <b-collapse id="accordion2" accordion="my-accordion" role="tabpanel">
        <b-card-body<p class="card-text">bla bla</p></b-card-body>
      </b-collapse>
    </b-card>

    <b-card no-body class="mb-1">
      <b-card-header header-tag="header" class="p-1" role="tab">
        <b-button block href="#" v-b-toggle.accordion3 variant="info">Accordion 3</b-button>
      </b-card-header>
      <b-collapse id="accordion3" accordion="my-accordion" role="tabpanel">
        <b-card-body><p class="card-text">Blo Blo</p></b-card-body>
      </b-collapse>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'SeminarsPage',
  methods: {

  }
}
</script>

<style scoped>

</style>
