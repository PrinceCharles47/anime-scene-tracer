<template>
  <v-app id="app">

    <Navigation />

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',

  components: {
    Navigation,
  },
  data: () => ({
    //
  }),
};
</script>

<style scoped>

#app{
  background-image: url(./assets/bg.jpg) !important;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

</style>
