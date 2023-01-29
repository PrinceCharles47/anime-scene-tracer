<template>
    <div>
        <v-app-bar dense dark>

            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-spacer></v-spacer>
            <v-toolbar-title>Ani<span>TRACE</span></v-toolbar-title>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" absolute temporary dark></v-navigation-drawer>
    </div>
</template>
  
  <script>

    export default {
      name: 'Navigation-Component',
  
      data () {
        return {
          drawer: false,
        }
      }
    }
  </script>
  
  <style scoped>

  span{
    color: skyblue;
  }

  </style>
  