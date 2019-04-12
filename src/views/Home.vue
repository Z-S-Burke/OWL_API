<template>
  <div>
    <b-carousel
      class="border-top border-bottom border-warning"
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <a class="text-light" href="https://www.twitch.tv/overwatchleague">
        <b-carousel-slide
          img-src="https://techraptor.net/wp-content/uploads/2018/01/overwatch-league-twitch-902x507.jpg"
        >
        </b-carousel-slide>
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
          img-src="https://cdn3.dualshockers.com/wp-content/uploads/2018/07/Overwatch-LEague-ds1-1340x1340.jpg"
        >
          <caption class="text-light caption_background d-flex justify-content-center">
            <h2>SCHEDULE</h2>
          </caption>
        </b-carousel-slide>
      </router-link>
    </b-carousel>

    <div class="mt-3">
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
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart(slide) {
      console.log(slide);
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

.caption_background {
  background-color: rgb(0,0,0, .25);
}

</style>
