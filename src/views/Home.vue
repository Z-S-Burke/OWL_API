<template>
  <div class="bglight splash_image">
    <div class="d-flex">
      <b-carousel
        class="bg-light carousel_border"
        id="carousel-1"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <a class="text-light" href="https://www.twitch.tv/overwatchleague">
          <b-carousel-slide
            img-src="https://cdn-images-1.medium.com/max/1306/1*eQo6KW2tcX4hzgimN1CciQ.jpeg"
          ></b-carousel-slide>
        </a>

        <router-link class="text-light" to="/teams">
          <b-carousel-slide
            img-src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-40f002676ef0d61a27cee08d85358575bee03e5b2374f52d2fa1b2b7fb0f061ada398c1c99e32189c64d9628b21b091f939c84ed6066ad179193de6a6305e004.jpg"
          >
            <caption class="text-light caption_background px-4 d-flex justify-content-center">
              <h2>TEAMS</h2>
            </caption>
          </b-carousel-slide>
        </router-link>

        <router-link to="/players">
          <b-carousel-slide
            img-src="https://cdn.gamer-network.net/2018/articles/2018-07-29-11-54/-1532861687779.jpg"
          >
            <caption class="text-light caption_background px-4 d-flex justify-content-center">
              <h2>PLAYERS</h2>
            </caption>
          </b-carousel-slide>
        </router-link>

        <router-link to="/schedule">
          <b-carousel-slide
            img-src="https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2Fab6d9eba5dec525a65d8637bb329277%2F206570547%2Fesport-ed.jpg&client=amp-blogside-v2&signature=ea6eff10c2f278b8d54949e86a2a46ab3b2a0724"
          >
            <caption class="text-light caption_background d-flex justify-content-center">
              <h2>SCHEDULE</h2>
            </caption>
          </b-carousel-slide>
        </router-link>
      </b-carousel>
    </div>

    <div class="m-3 bg-light text-dark carousel_border">
      <h4>GET STARTED WITH OWL API</h4>
      <ul class="p-3">
        <p class="question_text">What is OWL API?</p>
        <p>
          OWL API (Overwatch League Application Programming Interface) is a mobile-first 
          web app that tracks Overwatch League statistics in real-time, aiming to provide 
          accurate rosters, match histories, and match schedule for fans. 
        </p>
        <p class="question_text">How does OWL API work?</p>
        <p>
          OWL API takes requests a large JSON file from a third-party provider of e-sports 
          data and breaks it down, page by page, in order to provide a readable, clean, and 
          attractive format for fans of Blizzard's shooter to track their favorite players. 
        </p>
        <p class="question_text">Where does OWL API get its information?</p>
        <p>
          OWL API uses PandaScore as a data provider. They also support a number of other 
          popular e-sports titles, games like PlayerUnknown's Battlegrounds, DOTA 2, 
          League of Legends, and more. 
        </p>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      /* eslint-disable */
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>

<style (scoped)>
.question_text {
  font-weight: bold;
  font-style: italic;
}

.carousel_border {
  border-style: double;
  border-color: white;
  border-width: 10px;
  padding: 10px;
}

.splash_image {
  background-size: 1000;
  background-image: url("http://tell-the-world.com/wp-content/uploads/2017/03/1490307692055.jpeg");
}

@media screen and (min-width: 500px) {
  .carousel_border {
    border-width: 50px;
    padding: 25px;
  }
}

.caption_background {
  background-color: rgb(0, 0, 0, 0.25);
}

.bglight {
  background-color: rgba(255, 255, 255, 0.452);
}
</style>
