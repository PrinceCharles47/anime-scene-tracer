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
    class="d-flex justify-center my-5"
    >

      <v-card
      id="title"
      dark
      >

        <v-card-title
        class="d-flex flex-column align-center"
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
        @click="onChange"
        >
          <v-icon>mdi-upload</v-icon>
          Upload Image
        </v-btn>

      </v-card>
    
    </v-row>

    <v-row
    v-if="apiResponse"
    class="justify-space-between align-center"
    >

      <v-card
      width="350"
      class="results-card mb-5"
      dark
      v-for="response in apiResponse"
      :key="response.anilist.id"
      >

        <v-img
        :src="response.image"
        contain
        >
        </v-img>

        <v-card-title>
          {{ response.anilist.title.romaji }}
        </v-card-title>

        <!-- <v-spacer></v-spacer> -->

        <v-card-text>
          Episode {{ response.episode }}
        </v-card-text>

      </v-card>

    </v-row>

  </v-container>

</template>

<script>
  export default {
    name: 'Home-page',

    data () {
      return {
        imageUpload: null,
        apiResponse: null
      }
    },
    methods: {
      async onChange () {
        console.log("In progress");

        await fetch("https://api.trace.moe/search?anilistInfo", {
          method: "POST",
          body: this.imageUpload,
        }).then((e) => e.json())
        .then((data) => {
          console.log("Successful");
          this.apiResponse = data.result
        });
      }
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
  border: 1px solid gray;
}

</style>
