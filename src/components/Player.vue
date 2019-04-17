<template>
  <div>
    <div class="mx-3 mt-2 d-flex flex-column justify-content-center bg-light text-dark player_card">
      <div :title="onePlayer.player" class="text-dark" v-on:click="showPlayer()">
        <button class="player_button mb-2 bg-info text-light font-style-bold"> &ldquo;{{onePlayer.name}}&rdquo; </button>
      </div>
      <div v-if="!show">
        <div>
          <div v-if="onePlayer.image_url">
            <img
              v-if="onePlayer.image_url != null"
              class="player_image"
              v-bind:src="onePlayer.image_url"
            >
          </div>
        </div>
        <div>
          <div>
            <p v-if="onePlayer.role != null">Role: {{onePlayer.role}}</p>
            <p v-if="onePlayer.hometown != null">Hometown: {{onePlayer.hometown}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Player",
  props: ["onePlayer"],
  data() {
    return {
      show: true
    };
  },
  methods: {
    showPlayer() {
      this.show = !this.show;
    }
  }
};
</script>

<style>
.player_button {
    width: 100%;
    height: 50px;
    font-weight: bold;
    font-size: 24px;
}
</style>
