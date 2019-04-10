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
        ></b-carousel-slide>
      </a>
      <b-carousel-slide
        img-src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-40f002676ef0d61a27cee08d85358575bee03e5b2374f52d2fa1b2b7fb0f061ada398c1c99e32189c64d9628b21b091f939c84ed6066ad179193de6a6305e004.jpg"
      ></b-carousel-slide>
    </b-carousel>
    <div class="bg-info text-light p-3">
      <div class="border border-light custom_bg_color">
        <h2 class="mt-2">{{slide}}</h2>
      </div>
    </div>
    <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam ducimus culpa fugit perspiciatis! Consequuntur provident, repudiandae, magnam distinctio error animi ab deserunt minima enim deleniti, laudantium quaerat quis dolore molestias.</p>
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

<style>
.spacer {
  height: 25px;
}

.custom_bg_color {
  border-color: rgb(241, 144, 16);
}
</style>
