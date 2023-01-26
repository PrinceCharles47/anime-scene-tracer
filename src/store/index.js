import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false,
    animeResult: null,
    animeDetails: {
      trailerURL: '',
      title: {
        romaji: '',
        english: ''
      },
      synopsis: '',
      image: '',
      genres: [],
      studios: []
    }
  },
  getters: {

  },
  mutations: {
    SET_ANIME_RESULT: (state, payload) => {
      state.animeResult = payload
    },

    SET_LOADING: (state) => {
      if(state.loading === false){
        state.loading = true
      }else{
        state.loading = false
      }
    },
    
    SET_ANIME_DETAILS: (state, payload) => {
      state.animeDetails.trailerURL = payload.data.trailer.embed_url
      state.animeDetails.title.romaji = payload.data.title
      state.animeDetails.title.english = payload.data.title_english
      state.animeDetails.synopsis = payload.data.synopsis
      state.animeDetails.image = payload.data.images.jpg.large_image_url

      payload.data.genres.forEach(genre => {
        state.animeDetails.genres.push(genre.name)
      });

      payload.data.studios.forEach(studio => {
        state.animeDetails.studios.push(studio.name)
      });
    }
  },
  actions: {
    getAnimeResponse: async ({commit}, payload) => {
      commit('SET_LOADING')

      await fetch("https://api.trace.moe/search?anilistInfo", {
          method: "POST",
          body: payload,
        }).then((response) => response.json())
        .then((data) => {
          console.log("Successful");
          commit('SET_LOADING')

          commit('SET_ANIME_RESULT', data.result)
        })
    },

    getAnimeByMalId: async ({commit}, payload) => {
      await fetch('https://api.jikan.moe/v4/anime/' + payload + '/full')
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          commit('SET_ANIME_DETAILS', data)
        })
    }
  },
  modules: {
  }
})
