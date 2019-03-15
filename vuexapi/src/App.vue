<template>
  <div id="app">
    <b-navbar
      fixed="top"
      toggleable="sm"
      type="dark"
      variant="info"
    >
      <b-navbar-nav class="">
        <b-nav-item> <img
            class="logoOne"
            src="../src/assets/logoOne.png"
          /></b-nav-item>
      </b-navbar-nav>
      <b-collapse
        is-nav
        id="nav_collapse"
      >
        <b-navbar-nav>
          <b-nav-item href="#">
            <router-link to="/">HOME</router-link>
          </b-nav-item>
          <b-nav-item
            id="navlink"
            href="#"
          >
            <router-link to="/randomize">RANDOMIZE</router-link>

          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto right ">
          <b-nav-item href="#"> <i class="nav-icons fab fa-facebook-f"></i></b-nav-item>
          <b-nav-item href="#"> <i class="nav-icons fab   fa-twitter"></i></b-nav-item>
          <b-nav-item href="#"> <i class="nav-icons fab fa-instagram"></i></b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>

    <PushRotate
      ush
      :class="{ isOpen:isOpen }"
      :burgerIcon="false"
      :crossIcon="false"
    >
     <router-link to="/">
        <span><i class="fas fa-home"></i></span>
        <span>Home</span>
     </router-link>
          <router-link to="/randomize">

        <span><i class="fas fa-random"></i></span>
        <span>Randomize</span>
          </router-link>

  
      <a
        id="home"
        href="#"
      >
        <span><i class="fas fa-beer"></i></span>
        <span>Beers</span>
      </a>
      <a
        id="home"
        href="#"
      >
        <span><i class="fas fa-wine-bottle"></i></span>
        <span>About</span>
      </a>
    </PushRotate>

    <div id="wrapper">
      <div
        class="main-item menu"
        :class="{ isOpen:isOpen }"
        @click="isOpen=!isOpen"
      >>
        <span class="line line01"></span>
        <span class="line line02"></span>
        <span class="line line03"></span>
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer class=" page-footer footer font-xsmall  pt-4">
      <!-- Footer Links -->
      <div class="container-fluid text-center text-md-left">
        <!-- Grid row -->
        <div class="row footer-cont">
          <!-- Grid column -->
          <div
            hidden-lg-down
            class="col-md-3 col-sm-3 col-xs-12 jobs"
          >
            <!-- Links -->
            <h5 class="text-uppercase">Site Map</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">Home</a>
              </li>
              <li>
                <a href="#!">Beers</a>
              </li>
              <li>
                <a href="#!">Randomize</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12 infos">
            <!-- Links -->
            <h5 class="text-uppercase">ABOUT</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!">FAQ</a>
              </li>
              <li>
                <a href="#!">Application Process</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
              <li>
                <a href="#!">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="social-foot">
              <!-- Links -->
              <h5 class="text-uppercase">Links</h5>
              <ul class="list-unstyled">
                <li>
                  <i class="fab fa-envelope"></i>
                  <label>Newsletter</label>
                </li>
                <li>
                  <i class="fab fa-instagram"></i>
                  <label>Instagram</label>
                </li>
                <li>
                  <i class="fab fa-twitter"></i>
                  <label>Twitter</label>
                </li>
                <li>
                  <i class="fab fa-tumblr"></i>
                  <label>Tumblr</label>
                </li>
                <li>
                  <i class="fab fa-linkedin"></i>
                  <label>Linkedin</label>
                </li>
                <li>
                  <i class="fab fa-facebook"></i>
                  <label>facebook</label>
                </li>
                <li>
                  <i class="fab fa-pinterest"></i>
                  <label>Printerest</label>
                </li>
                <li>
                  <i class="fab fa-youtube"></i>
                  <label>Youtube</label>
                </li>
                <li>
                  <i class="fab fa-google"></i>
                  <label>Google +</label>
                </li>
              </ul>
            </div>
          </div>
          <!-- Grid column -->
          <div class="col-md-3 col-sm-3 col-xs-12">
            <!-- Links -->
            <h5 class="text-uppercase">Newsletter</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!"></a>
              </li>
              <li>
                <a href="#!">Subscribe to our Newsletter!</a>
              </li>
            </ul>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
      <!-- Footer Links -->
      <div class="footer-copyright text-center py-3">© 2010 Copyright:
    <a href="">Ioannis Dimitriou</a>
  </div>
    </footer>

  </div>
</template>

<script>
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { PushRotate } from "vue-burger-menu";

export default {
  name: "app",
  components: {
    PushRotate
  },
  data() {
    return {
      isOpen: false
    };
  },

  methods: {}
};
</script>




<style>
body {
  background-color: #f7f7f2;
}

h3 {
  font-family: futura-pt, Futura, "Century Gothic", Arial, sans-serif;
}

/* nav bar configuration */
.navbar-dark {
  background-color: #39342f !important;
  color: orange !important;
  font-size: 18px;
  font-weight: 700;
  font-family: jaf-lapture-display, Georgia, "Times New Roman", Times, serif;
  line-height: 1;
  height: 100px;
}

.navbar-dark .navbar-nav .nav-link {
  color: orange !important;
}
.logoOne {
  position: absolute;
  left: 50%;
  display: block;
  bottom: -17%;
  height: 144px;
  width: auto;
}

.nav-icons {
  color: white;
  font-size: 17px;
  padding: 3px;
}
.fab {
  margin-right: 4px;
}


#navlink {
  margin-left: 15px;
  margin-right: 15px;
}

#navlinktwo {
  margin-left: 15px;
  margin-right: 15px;
}

.bm-burger-button {
  width: 36px;
  height: 30px;
  left: 36px;
  top: 36px;
  cursor: pointer;
  z-index: 1;
  position: fixed;
  display: none;
}

/* end nav bar configuration */

.isOpen > div > .bm-menu {
  width: 271px !important;
  

}

.isOpen > div > .bm-overlay {
background-color: red !important; 

}

.bm-menu{
  background-color:#ffa500;
}

.fixed-top {
  z-index: 1;
}

.bm-overlay {
  background: rgba(0, 0, 0, 0.3);
}

.social {
  font-size: 10px;
}

.footer ul {
  color: white;
}

.footer {
  background-color: #39342f;
  font-family: jaf-lapture-display, Georgia, "Times New Roman", Times, serif;
  margin-top: 50px;
}

.footer-cont {
  margin: 0 auto;
  width: 60%;
  padding: 30px;
  text-align: left;
}

h5 {
  color: orange;
}

.footer li {
  color: burlywood;
}

i.fa {
  display: inline-block;
}

/* burger configuration */
#wrapper {
  position: fixed;
  left: 79%;
  z-index: 1;
  top: -29px;
  display: none;
}

.main-item {
  width: 150px;
  height: 150px;
}

.line {
  position: absolute;
  height: 7px;
  width: 25%;
  background: orange;
  -webkit-transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
  transition: all cubic-bezier(0.25, 0.1, 0.28, 1.54) 0.32s;
}

.line01 {
  top: 40%;
}

.line02 {
  top: 49%;
}

.line03 {
  top: 58%;
}

.isOpen .line01 {
  transform: rotate(45deg);
  top: 49%;
}

.isOpen .line02,
.isOpen .line03 {
  transform: rotate(-45deg);
  top: 49%;
}

/* end burger configuration */


/* iphone X media quire */
@media screen and (max-width: 575px) {
  .navbar {
    height: 100px;
  }

  .logoOne {
    left: 27%;
  }

  .social,
  .jobs,
  .infos {
    display: none;
  }

  #wrapper {
    display: inline;
  }


}
</style>