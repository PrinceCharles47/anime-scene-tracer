<template>

    <v-container class="white--text" :loading="loading">
      <v-row>
        <v-spacer></v-spacer>
        <v-btn
        to="/"
        class="my-5 mr-3"
        >
        <v-icon>mdi-step-backward</v-icon>
          Go Back
        </v-btn>
      </v-row>
      <!-- <v-btn
      @click="fetchedData"
      >
        Click
      </v-btn> -->
      <!-- <v-container v-if="results">
        <iframe :src="results.data.trailer.embed_url" frameborder="0" style="width: 500px; height: 500px;"></iframe>
        <p>embed url: {{ results.data.trailer.embed_url }}</p>
        <p>url: {{ results.data.trailer.url }}</p>
        <p>youtube id: {{ results.data.trailer.youtube_id }}</p>
        <v-list-item v-for="(genre, i) in results.data.genres" :key="i" class="white--text">
        {{ genre.name }}
        </v-list-item>
      </v-container> -->

      <v-card v-if="animeDetails" dark id="card">
        <!-- <v-row>
          <v-spacer></v-spacer>
          <v-btn to="/" class="mb-5">
            <v-icon>
              mdi-back
            </v-icon>
            Back
          </v-btn>
        </v-row> -->

        <v-row v-if="animeDetails.trailerURL">
          <v-col>
            <iframe :src="animeDetails.trailerURL" frameborder="0"></iframe>
          </v-col>
        </v-row>

        <v-row>
          <v-col
          xs="12"
          sm="12"
          md="9"
          >
            <v-card-title>
              {{ animeDetails.title.romaji }}
            </v-card-title>

            <v-card-subtitle>
              {{ animeDetails.title.english }}
            </v-card-subtitle>

            <v-card-subtitle>
              SYNOPSIS:
            </v-card-subtitle>
            <v-card-text>
                {{ animeDetails.synopsis }}
              </v-card-text>

          </v-col>

          <v-col
          xs="12"
          sm="12"
          md="3"
          >
            <v-img
            :src="animeDetails.image"
            class="fill-height"
            ></v-img>
          </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row>
          <v-col cols="6">
            <v-card-subtitle class="white--text">
              GENRE:
              <v-card-text
              v-for="(genre, i) in animeDetails.genres"
              :key="i"
              class="py-0"
              >
                {{ genre }}
              </v-card-text>
            </v-card-subtitle>
          </v-col>

          <v-col cols="6">
            <v-card-subtitle class="white--text">
              STUDIO:
              <v-card-text
              v-for="(studio, i) in animeDetails.studios"
              :key="i"
              class="py-0"
              >
                {{ studio }}
              </v-card-text>
            </v-card-subtitle>
          </v-col>
        </v-row>

      </v-card>

    </v-container>

</template>
  
  <script>
  import { mapState } from 'vuex';

    export default {
      name: 'Result-Details',
  
      data () {
        return {
          loading: false,
        }
      },
      computed: {
        ...mapState(['animeDetails'])
      }
      // methods: {
      //   async fetchedData () {
      //     await fetch('https://api.jikan.moe/v4/anime/30749/full')
      //     .then((e) => e.json())
      //     .then((data) => {
      //       this.results = data
      //       console.log(data);
      //     })
      //   }
      // },
      // async mounted () {
      //   this.loading = true
      //   await fetch('https://api.jikan.moe/v4/anime/1/full')
      //     .then((e) => e.json())
      //     .then((data) => {
      //       this.loading = false
      //       this.results = data
      //       console.log(data);
      //     })
      // }
    }
  </script>
  
  <style scoped>
  
  iframe{
    width: 100%;
    aspect-ratio: 2/1;
  }

  #card{
    background-color: transparent;
    box-shadow: none;
    border: 1px solid rgb(48, 48, 48);
  }

  </style>
  