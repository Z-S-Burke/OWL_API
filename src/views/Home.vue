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
        width="100%"
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
            img-src="https://i.kinja-img.com/gawker-media/image/upload/s--Fic8xpVD--/c_scale,f_auto,fl_progressive,q_80,w_800/mmadas61b3ke1xgzcdsh.jpg"
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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Tenetur accusantium inventore quae, numquam ipsam quidem illo libero ea vitae
          fugit illum sint iure aliquid voluptas. Aliquid ipsam ut sed aut.
        </p>
        <p class="question_text">How does OWL API work?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Incidunt laudantium nulla, ipsam, at recusandae architecto debitis pariatur harum
          iusto earum illo magni beatae nihil tempora consequatur quia nam a blanditiis.
        </p>
        <p class="question_text">Where does OWL API get its information?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Officiis corrupti, harum eligendi illo placeat commodi? Ipsam minus illo eligendi eius beatae
          similique recusandae, dolorem rerum magnam eum nulla labore eos?
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
  background-image: url("https://bobandsuewilliams.com/images/overwatch-art-black-and-white-1.jpg");
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
