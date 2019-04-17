<template>
  <div>
    <button :title="oneRoster.players" class="text-dark roster_button my-2" v-on:click="showRoster()">
      <p v-if="show">Hide &ldquo;{{oneRoster.name}}&rdquo; Roster</p>
      <p v-if="!show">Show &ldquo;{{oneRoster.name}}&rdquo; Roster</p>
    </button>
    <div v-if="show" v-for="player of oneRoster.players" v-bind:key="player.id" class="mb-2">
      <Player :onePlayer="player"/>
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
export default {
  name: "Roster",
  props: ["oneRoster"],
  components: {
      Player
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    showRoster() {
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
