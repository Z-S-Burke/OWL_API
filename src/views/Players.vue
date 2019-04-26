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
            <h2 class="py-3 border-bottom border-warning bg-info text-light">PLAYERS</h2>
          </div>
          <div class="lds-hourglass d-flex justify-content-center" id="load"></div>
          <div>
            <h5>Click to learn more about...</h5>
          </div>
          <div class="match_schedule_container splash_image">
            <div
              class="bg-light text-dark player_card match_schedule_row"
              v-for="(player, index) in players"
              :key="index"
            >
              <Player :onePlayer="player"/>
            </div>
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
          let element = document.getElementById("load");
          element.classList.remove("lds-hourglass");
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
  .match_schedule_container {
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flex-wrap: wrap;
    display: flex;
    width: 100vw;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    background-color: white;
  }

  .match_schedule_row {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 48vw;
  }

  .player_card {
    border-width: 5px;
    border-color: rgb(142, 169, 177);
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
