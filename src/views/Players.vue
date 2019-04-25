<template>
  <div id="app">
    <div class="bg-dark text-light">
      <div>
        <div class="pb-3">
          <img
            class="page_image"
            src="https://i.kinja-img.com/gawker-media/image/upload/s--Fic8xpVD--/c_scale,f_auto,fl_progressive,q_80,w_800/mmadas61b3ke1xgzcdsh.jpg"
          >
          <div>
            <h2 class="py-3 border-bottom border-warning bg-light text-dark">PLAYERS</h2>
          </div>
          <div>
            <h5>Click to learn more about...</h5>
          </div>
          <div
            class="bg-light text-dark m-3 player_card"
            v-for="(player, index) in players"
            :key="index"
          >
            <Player :onePlayer="player"/>
          </div>
        </div>
        <b-button class="mb-3 bg-light text-dark" href="#">NEXT PAGE</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Player from "@/components/Player.vue";
export default {
  name: "Players",
  components: {
    Player
  },
  data() {
    return {
      playersURL: "https://api.pandascore.co/ow/players?sort=name&per_page=25",
      players: [],
      search: ""
    };
  },
  methods: {
    getData(playersURL) {
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + playersURL, {
        headers: {
          Authorization:
            "Bearer 2Yes3_EgUod9qA4WVNtcbhLlL0oLfH-Uu7CuCPG7BXSjl_boqa8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.players = data;
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.getData(this.playersURL);
  }
};
</script>

<style>
@media screen and (min-width: 768px) {
  .player_card_container {
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flex-wrap: wrap;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-end;
    background-color: white;
  }

  .player_card {
    width: 50vw;
  }
}
.page_image {
  width: 100%;
}

.info_text {
  font-weight: bold;
}
.current_team {
  width: 75%;
}
</style>
