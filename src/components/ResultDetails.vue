<template>

    <v-container class="white--text">
      <v-btn
      @click="fetchedData"
      >
        Click
      </v-btn>
      <!-- <p class="white--text">{{ results }}</p> -->
      <v-container v-if="results">
        <v-list-item v-for="(genre, i) in results.data.genres" :key="i" class="white--text">
        {{ genre.name }}
        </v-list-item>
      </v-container>
    </v-container>

</template>
  
  <script>
    export default {
      name: 'Result-Details',
  
      data () {
        return {
          results: null
        }
      },
      methods: {
        async fetchedData () {
          await fetch('https://api.jikan.moe/v4/anime/30749/full')
          .then((e) => e.json())
          .then((data) => {
            this.results = data
            console.log(data);
          })
        }
      }
    }
  </script>
  
  <style scoped>
  
  </style>
  