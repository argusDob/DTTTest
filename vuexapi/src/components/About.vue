
                                   show details for each product
                                   match products with router id



<template>
  <div class="container">
    <div class="">
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-lg-4 beer-image  ">
          <img
            class=" logo"
            v-bind:src="selectedArticle[0].image_url"
          />
        </div>
        <div class=" descr col-xs-12 col-sm-12 col-lg-8 ">
          <h2 class="beer-title">
            {{selectedArticle[0].name}}
          </h2>
          <h3 class="beer-style">
            {{selectedArticle[0].contributed_by}}
          </h3>
          <div class="beer-description">
            <b-tabs>
              <b-tab
                title="DESCRIPTION"
                active
              >
                <p>{{selectedArticle[0].description}}</p>
              </b-tab>
              <b-tab
                title="FOOD PAIRING "
                active
              >
                <li>{{selectedArticle[0].food_pairing[0]}}</li>
                <!-- {{selectedArticle[0].description}} -->
                <li> {{selectedArticle[0].food_pairing[1]}}</li>
                <li> {{selectedArticle[0].food_pairing[2]}}</li>
              </b-tab>
            </b-tabs>
          </div>
          <div class="beer-ingredients">
            <div class="beer-ingredient abv">
              <div class="beer-info-title">ABV</div>
              <div class="value">{{selectedArticle[0].abv}}<span class="super-percent">%</span></div>
            </div>
            <div class="beer-ingredient malts">
              <div class="beer-info-title">Malts</div>
              <div><em>{{selectedArticle[0].ingredients.malt[0].name}}, {{selectedArticle[0].ingredients.malt[1].name}}</em></div>
            </div>
            <div class="beer-ingredient hops">
              <div class="beer-info-title">Hops</div>
              <div><em>{{selectedArticle[0].ingredients.hops[0].name}}</em></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Carousel />
  </div>
</template>


<script >
const _ = require("lodash");
import { mapState } from "vuex";

import Carousel from "@/components/carousel.vue";
export default {
  name: "about",
  props: {
    //  proId: this.$route.params.Pid,
  },
  components: {
    Carousel
  },
  data() {
    return {
      article: ""
    };
  },
  computed: {
    // return the beers obj filter it by id and match it with route_id
    selectedArticle() {
      return this.$store.state.beers.filter(
        beer => beer.id == this.$route.params.id
      );
    }
  },
  mounted() {
    //if the list is empty trigger again the actions so the list
    //is not empty when refresh the page
    if (this.$store.state.beers.length === 0) this.$store.dispatch("loadCoins");

    console.log(
      this.$store.state.beers.filter(beer => beer.id == this.$route.params.id)
    );
  }
};
</script>


<style >
body {
  font-family: jaf-lapture, Georgia, "Times New Roman", Times, serif;
  font-size: 16px;
  line-height: 1.428571429;
  color: #202830;
}

.container {
  margin-top: 200px;
  margin-bottom: 150px;
}

.descr {
  text-align: center;
  /* display: flex;
    flex-direction: column;
    justify-content: center; */
}

.beer-image {
  display: flex;
  justify-content: center;
}
.logo {
  height: 500px;
}

.nav-tabs .nav-item .nav-link.active {
  color: orange;
  border: none;
}

.nav-tabs {
  border: none;
}

.nav-link:hover,
.nav-link:focus {
  text-decoration: none;
  color: brown;
  border: none;
}
.tab-content {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.nav.nav-tabs li:first-child {
  border-right: 2px solid #d4cfc9;
}

a {
  color: burlywood;
}

.beer-description {
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: left;
}

.nav-tabs {
  display: flex;
  justify-content: center;
  letter-spacing: 0.1em;
}

.beer-ingredients {
  margin-left: -15px;
  margin-right: -15px;
  background-color: rgba(212, 207, 201, 0.25);
  padding: 40px 0;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

.beer-ingredients .beer-ingredient {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.beer-description .nav.nav-tabs,
.beer-info-title,
.beer-style {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.beer-ingredient.abv .value {
  font-size: 30px;
  font-weight: 700;
  line-height: 1.1;
}
.beer-info-title {
  font-size: 15px;
  color: #202830;
}
.beer-ingredients .beer-ingredient {
  position: relative;
  min-height: 1px;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
}

.beer-info-title {
  font-weight: 700;
  line-height: 1.1;
  color: rgb(107, 82, 56);
}

@media screen and (max-width: 769px) {
  .beer-ingredients {
    flex-direction: column;
    margin-top: 5px;
    margin-bottom: 5px;
    padding: 15px 0;
  }
  .beer-info-title {
    margin-bottom: 1px;
    margin-top: 5px;
  }
}

/* //Iphone X */
@media only screen and (min-device-width: 375px) and (max-device-width: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait) {
  .nav.nav-tabs li:first-child {
    border-bottom: 2px solid;
    border-right: none;
  }
}
</style>