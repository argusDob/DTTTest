// store.js

import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faCoffee)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuex);
Vue.use(VueAxios, axios);


export default new Vuex.Store({
  state: {
    beers: [],
    isLoaded: false
  },
  actions: {
    async loadBeers({ commit }) {
      axios
        .get("https://api.punkapi.com/v2/beers")
        .then(r => r.data)
        .then(beers => {
          commit("SET_BEERS", beers);
          commit("BEERS_LOADED", true);
        });
    }
  },
  mutations: {
    SET_BEERS(state, beers) {
      state.beers = beers;
    },
    BEERS_LOADED(state, isLoaded) {
      state.isLoaded = isLoaded;
    }
  },
});
