                      Main grid that I present the products
                      Display the beers
                      filter the beers
                      show only 10 products from the list
                      create a pagination sort
<template>
  <div class="container home">
    <div class=" main-conte">
      <transition-group
        name="fade"
        tag="div"
        id="container"
        class=" row "
      >
        <figure
          v-for="(value,index) in  filteredBeers"
          id="page-wrap"
          :key="index"
          class="beer-container col-xs-6 col-sm-6 col-lg-4 col-xl-2"
        >
          <router-link :to="{ path: `/about/${value.id}`}">
            <a>
              <img
                class="logo lazy img-responsive loaded"
                v-bind:src="value.image_url"
              />
              <figcaption>
                <div class="beer-title">{{value.name}}</div>
                <div class="beer-availability"> {{value.tagline}}</div>
                <div class="learn-more">
                  <h4 class="beer-info-title">Format</h4>
                  <span class="serving-icons"></span>
                  <div class="serving">
                    <i
                      v-if="value.abv >= 0 && value.abv <=6 "
                      class="fas fa-wine-glass-alt"
                    ></i>
                    <i
                      v-if="value.abv >= 6 && value.abv <=7"
                      class="fas fa-glass-cheers"
                    ></i>
                    <i
                      v-if="value.abv >= 7 && value.abv <=100"
                      class="fas fa-wine-bottle"
                    ></i>
                    <span class="measure">{{value.abv}}</span>%
                  </div>
                </div>
              </figcaption>
            </a>
          </router-link>
        </figure>
      </transition-group>
      <div class=prev-next>
        <button
          class="prev"
          @click="prevPage"
          :disabled="currentPage==1"
        >
          <i class="fas fa-angle-double-left"></i> </button>
        <button class="order" @click="orderByName = !orderByName"><i class="fas fa-beer"></i></button>
        <button
          class="next"
          @click="nextPage"
          :disabled="currentPage == totalPages"
        >
          <i class="fas fa-angle-double-right"></i> </button>
      </div>
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
  components: {
    Carousel
  },
  data() {
    return {
      filter: "test",
      currentPage: 1,
      orderByName: false,
   
    };
  },
  mounted() {
   // when the component is mounted, we call the store’s action.
    this.$store.dispatch("loadBeers");

  },
  created() {},
  computed: {
    ...mapState(["beers", "isLoaded"]),
    consoleMyLog() {
      return this.isLoaded;
    },

    
    filteredBeers() {
      //return an ordered list by Name
      return [
        ...(this.orderByName
          ? _.orderBy(this.toBeShown, "name", "asc")
          : this.toBeShown)
      ];
    },

    toBeShown() {
      return [...this.beers.slice(0, this.currentPage * 10)];
    },
    totalPages() {
      return Math.ceil(this.beers.length / 4);
    }
  },
  methods: {
    nextPage() {
      //go to the next products 
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    prevPage() {
      //go to the previous products
      this.currentPage = this.currentPage - 1 || 1;
    },
 
  },

};
</script>


<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
.main-conte {
  margin-top: 100px;
}
.beer-container {
  text-align: center;
  margin-bottom: 15px;
  margin-top: 15px;
}
logo:hover {
  -webkit-transform: translateY(-30px);
  -o-transform: translateY(-30px);
  transform: translateY(-30px);
}
beer-container img {
  position: absolute;
  bottom: 90px;
  left: 0;
  right: 0;
  max-width: 33.3333%;
  margin: 15px auto;
}
.img-responsive {
  height: 200px;
  width: auto;
}
.beer-container a {
  position: relative;
  display: block;
  -webkit-transition: color 225ms ease-in-out,
    -webkit-transform 225ms ease-in-out;
  -o-transition: color 225ms ease-in-out, -o-transform 225ms ease-in-out;
  transition: color 225ms ease-in-out, transform 225ms ease-in-out;
}
.image-loaded,
.lazy.loaded {
  -webkit-transition: opacity 225ms ease-in-out;
  -o-transition: opacity 225ms ease-in-out;
  transition: opacity 225ms ease-in-out;
  opacity: 1;
}
a:active,
a:hover {
  outline: 0;
}
a:focus,
a:hover {
  color: #f4a434;
  text-decoration: none;
}
.beer-container .beer-title {
  font-weight: 700;
  margin-bottom: 5px;
  margin-top: 10px;
}
.beer-container a:active,
.beer-container a:focus,
.beer-container a:hover {
  -webkit-transform: translateY(-30px);
  -o-transform: translateY(-30px);
  transform: translateY(-30px);
}
.image-loaded,
.lazy.loaded {
  -webkit-transition: opacity 225ms ease-in-out;
  -o-transition: opacity 225ms ease-in-out;
  transition: opacity 225ms ease-in-out;
  opacity: 1;
}
.beer-availability {
  color: #6b5238;
  font-family: futura-pt, Futura, "Century Gothic", Arial, sans-serif;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.learn-more {
  color: #ee7337;
  font-weight: 700;
  font-size: 18px;
  opacity: 0;
  -webkit-transform: translateY(5px);
  -o-transform: translateY(5px);
  transform: translateY(5px);
  -webkit-transition: -webkit-transform ease-in-out 125ms,
    opacity ease-in-out 125ms;
  -o-transition: -o-transform ease-in-out 125ms, opacity ease-in-out 125ms;
  transition: transform ease-in-out 125ms, opacity ease-in-out 125ms;
}
.beer-container a:active .learn-more,
.beer-container a:focus .learn-more,
.beer-container a:hover .learn-more {
  opacity: 1;
  -webkit-transform: translateY(0);
  -o-transform: translateY(0);
  transform: translateY(0);
}
.beer-container .beer-title {
  font-weight: 700;
  margin-bottom: 5px;
}
.beer-container .beer-availability {
  margin-bottom: 10px;
}
.beer-container .beer-description .nav.nav-tabs,
.beer-container .beer-info-title,
.beer-description .beer-container .nav.nav-tabs {
  display: none;
}
.beer-description .nav.nav-tabs,
.beer-info-title,
.beer-style {
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.beer-description .nav.nav-tabs,
h4 {
  font-family: futura-pt, Futura, "Century Gothic", Arial, sans-serif;
}
.beer-container .serving-icons .serving {
  display: inline-block;
  text-align: center;
  margin: 10px 8px 0 0;
}
.learn-more .icon {
  display: inline-block;
  margin-left: 4px;
  font-size: 125%;
}
.beer-tit {
  background-color: #d7af70;
  font-size: 20px;
  width: 200px;
  color: white;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.beer-title {
  color: #202830;
  margin-top: 15px;
  line-height: 1;
}

.fa-angle-double-left,
.fa-angle-double-right {
  font-size: 70px;
  color: orange;
}
.fa-previous {
  transform: rotate(226deg);
  /* color:orange; */
}
.fa-next {
  transform: rotate(46deg);
}
.prev-next {
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
}
.next,
.prev {
  border: none;
}

.order{
      font-size: 40px;
    background-color: #f7f7f2;
    border: none;
}
</style>