<template>
  <v-app id="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

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
