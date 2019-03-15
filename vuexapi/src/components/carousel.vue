                                      Related Products
                                      Randomize the list
                                      Show three random products from the list each time
                                      

<template>
<div  class=" related-title"  >
    <h3>More Core & Seasonal Beers</h3>
  <div class="related-products">
      <figure v-for="(value,index) in  randomSample" id="page-wrap" :key="index" class="beer-container "   >
          <router-link :to="{ path: `/about/${value.id}`}">
          <a  >
    <img  class="logo lazy img-responsive loaded" v-bind:src="value.image_url"/>
          <figcaption>
            <div class="beer-title">{{value.name}}</div>
            <div class="beer-availability"> {{value.tagline}}</div>
            <div class="learn-more">
              <h4 class="beer-info-title">Format</h4>
              <span class="serving-icons"></span>
              <div class="serving">
             <i v-if="value.abv >= 0 && value.abv <=6 " class="fas fa-wine-glass-alt"></i> 
             <i v-if="value.abv >= 6 && value.abv <=7" class="fas fa-glass-cheers"></i>
             <i v-if="value.abv >= 7 && value.abv <=100" class="fas fa-wine-bottle"></i>
             <span class="measure">{{value.abv}}</span>%
    </div>
            </div>
           </figcaption>
        </a>
          </router-link>
      </figure>
      </div>
       <div>
    </div>
</div>
</template>

<script>
const _ = require("lodash");
import { mapState } from "vuex";
import Carousel from "@/components/carousel.vue";

export default {
  name: "home",
  components:{
    Carousel
  },
  data() {
    return {
      filter: "test",
      currentPage: 1,
      orderByName: false,
      goTodetail: "",
      randomSample:[],
     };
  },
  mounted() {
    this.$store.dispatch("loadBeers");
    this.randomize();
  },
  created() {},
  computed: {
    ...mapState(["beers", "isLoaded"]),
    consoleMyLog() {
      return this.isLoaded;
    },
  },
  methods: {
   randomize() {
  for(var i=0; i < 3; i++) {
   var randomChoice = this.beers[~~(Math.random() * this.beers.length)]
   this.randomSample.push(randomChoice)
   console.log(this.randomSample);  
}
    }
    }
};
</script>

<style>
.related-title{
   text-align: center;
    color: brown;
    margin: 0 auto;
    width: 90%;
    padding-top: 100px;
}

.related-products{
    display: flex;
    justify-content: space-between;
    margin-top:100px;
}
@media only screen and (max-width: 600px)  {
    .related-products{
    flex-direction: column;
    }

}

</style>