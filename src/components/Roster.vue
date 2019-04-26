<template>
  <div id="app">
    <button
      :title="oneRoster.players"
      class="text-dark roster_button my-2"
      v-on:click="showRoster()"
    >
      <div class="team_card_media_roster">
        <div id="roster_big">
          <div>
            <p v-if="show">Hide &ldquo;{{oneRoster.acronym}}&rdquo;</p>
          </div>
          <div>
            <p v-if="!show">Show &ldquo;{{oneRoster.acronym}}&rdquo;</p>
          </div>
        </div>
      </div>
    </button>
    <div id="roster_big" v-for="player of oneRoster.players" v-bind:key="player.id" class="mb-2">
      <div v-if="show">
        <Teammate :onePlayer="player"/>
      </div>
    </div>
  </div>
</template>

<script>
import Teammate from "@/components/Teammate.vue";
export default {
  name: "Roster",
  props: ["oneRoster"],
  components: {
    Teammate
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

.roster_button {
  font-size: 10px;
}
</style>
