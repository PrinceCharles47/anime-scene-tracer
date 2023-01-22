<template>
  <v-card
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

    <v-card
    class="d-flex mb-3 pa-1"
    >

    <v-img
    src="../assets/test_image1.jpg"
    max-width="175"
    class="mr-2 rounded-sm"
    ></v-img>

    <div>
      <v-card-title>
        Shigatsu wa kimi no uso
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card-text>
        Episode 47 | 99.000 Similarity
      </v-card-text>
    </div>

    </v-card>

    <v-card
    class="d-flex mb-3 pa-1"
    >

    <v-img
    src="../assets/test_image2.jpg"
    max-width="175"
    class="mr-2 rounded-sm"
    ></v-img>

    <div>
      <v-card-title>
        Shigatsu wa kimi no uso
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card-text>
        Episode 47 | 99.000 Similarity
      </v-card-text>
    </div>

    </v-card>

    <v-card
    class="d-flex mb-3 pa-1"
    >

    <v-img
    src="../assets/test_image2.jpg"
    max-width="175"
    class="mr-2 rounded-sm"
    ></v-img>

    <div>
      <v-card-title>
        Shigatsu wa kimi no uso
      </v-card-title>

      <v-spacer></v-spacer>

      <v-card-text>
        Episode 47 | 99.000 Similarity
      </v-card-text>
    </div>

    </v-card>

  </v-card>
</template>

<script>
  export default {
    name: 'Home-page',

    data () {
      return {
        imageUpload: null
      }
    },
    methods: {
      async onChange () {
        console.log("In progress");

        await fetch("https://api.trace.moe/search", {
          method: "POST",
          body: this.imageUpload,
        }).then((e) => e.json())
        .then((data) => {
          console.log("Successful");
          console.log(data);
        });
      }
    }
  }
</script>

<style scoped>

/* *{
  border: 1px solid grey;
} */

#card{
  background-color: transparent;
  box-shadow: none;
  /* border: 1px solid white; */
}

</style>
