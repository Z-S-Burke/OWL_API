<template>
  <div>
    <div class="mx-3 mt-2 d-flex flex-column justify-content-center bg-light text-dark player_card">
      <div :title="onePlayer.player" class="text-dark" v-on:click="showPlayer()">
        <button
          class="player_button mb-2 bg-info text-light font-style-bold"
        >&ldquo;{{onePlayer.name}}&rdquo;</button>
      </div>
      <div v-if="!show">
        <div v-if="onePlayer.image_url">
          <img
            v-if="onePlayer.image_url != null"
            class="player_image"
            v-bind:src="onePlayer.image_url"
          >
        </div>
        <div>
          <div>
            <div
              class="d-flex justify-content-between border align-items-center border-bottom"
              v-if="onePlayer.role != null"
            >
              <p class="font-weight-bold">Role:</p>
              <p>{{onePlayer.role}}</p>
            </div>
            <div
              class="d-flex justify-content-between align-items-center border border-bottom"
              v-if="onePlayer.hometown != null"
            >
              <p class="font-weight-bold">Hometown:</p>
              <p>{{onePlayer.hometown}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Teammate",
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
  height: 40px;
  font-weight: bold;
  font-size: 20px;
}

.player_team_img {
  width: 100%;
}
</style>
