                                    Randomize page
                It is a simple page that show a random beer each time 
                If you click on the image the array fetch an other element of the list
<template>
  <div class="randomize">
    <div class="">
      <div class="row">
        <div
          @click="randomize"
          class="col-xs-12 col-sm-12 col-lg-4 beer-image random "
        >
          <img
            @click="randomize"
            class=" logo "
            v-bind:src="randomElement.image_url"
          />
        </div>
        <div class=" descr col-xs-12 col-sm-12 col-lg-8 ">
          <h2 class="beer-title">
            {{randomElement.name}}
          </h2>
          <h3 class="beer-style">
            {{randomElement.contributed_by}}
          </h3>
          <div class="beer-description">
            <b-tabs>
              <b-tab
                title="DESCRIPTION"
                active
              >{{randomElement.description}}</b-tab>
              <b-tab
                title="FOOD PAIRING "
                active
              >{{randomElement.food_pairing[0]}}
                <!-- {{selectedArticle[0].description}} -->
                {{randomElement.food_pairing[1]}}
                {{randomElement.food_pairing[2]}}</b-tab>
            </b-tabs>
          </div>
          <div class="beer-ingredients">
            <div class="beer-ingredient abv">
              <h4 class="beer-info-title">ABV</h4>
              <div class="value">{{randomElement.abv}}<span class="super-percent">%</span></div>
            </div>
            <div class="beer-ingredient malts">
              <h4 class="beer-info-title">Malts</h4>
              <div><em>{{randomElement.food_pairing[0]}}</em></div>
            </div>
            <div class="beer-ingredient hops">
              <h4 class="beer-info-title">Hops</h4>
              <div><em>Hallertauer</em></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="randomize">Random</button> -->
  </div>
</template>

<script>
// eslint-disable-next-line
const _ = require("lodash");
// eslint-disable-next-line
import { mapState } from "vuex";
export default {
  name: "Randomize",
  data() {
    return {
      randomElement: null
    };
  },
  mounted() {
    this.randomize();
  },
  methods: {
    //Randomize the elements from the list
    //initialize the paths to my beers as an array in my data property
    //get a random number within the number of items in my beers paths array using
    randomize() {
      var random = Math.floor(Math.random() * this.$store.state.beers.length);
      console.log(random);
      console.log(this.$store.state.beers);
      this.randomElement = this.$store.state.beers[random];
    }
  }
};
</script>

<style>
.random {
  cursor: pointer;
}
</style>