<template>
  <!-- <v-card
  max-width="500"
  dark
  class="mx-auto mt-10 pa-5"
  id="card"
  >

    <v-card-title
    class="text-h4 d-flex justify-center"
    >
      Asking for sauce no more!
    </v-card-title>

    <v-card-subtitle class="text-center white--text">
      Upload the image of the anime scene to know  the title of the show and other details.
    </v-card-subtitle>

    <v-file-input
    outlined
    dense
    label="File Input"
    prepend-icon="mdi-image"
    v-model="imageUpload"
    ></v-file-input>

    <v-btn
    block
    outlined
    class="white black--text"
    @click="onChange"
    >
      <v-icon>mdi-upload</v-icon>
      Upload Image
    </v-btn>

    <v-card-text class="white--text px-0">
      Note: Remove borders and any unnecessary texts before uploading for accurate results.
    </v-card-text>

    <v-container v-if="apiResponse" class="pa-0">
      <v-card
      class="d-flex mb-3 pa-1"
      v-for="response in apiResponse" :key="response.anilist.id"
      >

        <v-img
        :src="response.image"
        max-width="175"
        class="mr-2 rounded-sm"
        ></v-img>

        <video class="video" :src="response.video"></video>

        <div>
          <v-card-subtitle>
            {{ response.anilist.title.romaji }}
          </v-card-subtitle>

          <v-spacer></v-spacer>

          <v-card-text>
            Episode {{ response.episode }} | {{ response.similarity }}
          </v-card-text>
        </div>

      </v-card>
    </v-container>

  </v-card> -->

  <v-container>

    <v-row
    class="d-flex justify-center my-5 mx-1"
    >

      <v-card
      id="title"
      dark
      :loading="loading"
      >

        <v-card-title
        class="d-flex flex-column align-center text-h4"
        >
          ASK FOR SAUCE NO MORE!
        </v-card-title>
        
        <v-card-text>
          Upload the image of the anime scene to know  the title of the show and other details.
        </v-card-text>

        <v-file-input
        label="Input image file"
        prepend-icon="mdi-image"
        v-model="imageUpload"
        outlined
        dense
        >
        </v-file-input>

        <v-btn
        block
        outlined
        class="white black--text"
        @click="getResponse"
        :loading="loading"
        >
          <v-icon>mdi-upload</v-icon>
          Upload Image
        </v-btn>

      </v-card>
    
    </v-row>

    <v-row
    v-if="animeResult"
    >

      <v-col
      xs="12"
      sm="6"
      md="4"
      lg="3"
      v-for="response in animeResult"
      :key="response.anilist.id + Math.random() * 100"
      class="v-col"
      >

        <v-card
        class="results-card mb-5 d-flex flex-column justify-space-between"
        height="350"
        @click="getAnimeDetails(response.anilist.idMal)"
        dark
        >

          <v-img
          :src="response.image"
          max-height="60%"
          >
          </v-img>

          <!-- <video :src="response.video" controls max-height="60%"></video> -->

          <v-card
          class="d-flex flex-column justify-space-between results-card-internal"
          height="40%"
          >

            <v-card-title max-height="50%">
              {{ response.anilist.title.romaji }}
            </v-card-title>

            <v-card-text>
              Episode {{ response.episode }} | Similarity {{ Math.floor(response.similarity * 100) + "%" }} | {{ response.anilist.idMal }}
            </v-card-text>

          </v-card>

        </v-card>

      </v-col>

    </v-row>

  </v-container>

</template>

<script>
import { mapActions, mapState } from 'vuex';

  export default {
    name: 'Home-page',

    data () {
      return {
        imageUpload: null,
      }
    },
    methods: {
      ...mapActions(['getAnimeResponse', 'getAnimeByMalId']),

      getResponse () {
        this.getAnimeResponse(this.imageUpload)
      },

      getAnimeDetails (malId) {
        console.log('Called')
        this.getAnimeByMalId(malId)
        this.$router.push('/details')
      }
    },
    computed: {
      ...mapState(['loading', 'animeResult'])
    }
  }
</script>

<style scoped>

/* *{
  border: 1px solid grey;
} */

/* #card{
  background-color: transparent;
  box-shadow: none;
  border: 1px solid white;
}

.video{
  max-width: 175px;
} */

#title{
  background-color: transparent;
  box-shadow: none;
}

.results-card{
  background-color: transparent;
  box-shadow: none;
  border: 1px solid rgb(48, 48, 48);
}

.results-card:hover{
  box-shadow: 0px 0px 10px 1px rgb(78, 78, 78);
  transition: 0.25s;
}

.results-card-internal{
  background-color: transparent;
  box-shadow: none;
}

</style>
