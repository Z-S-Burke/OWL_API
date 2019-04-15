<template>
  <div id="app">
    <div class="bg-dark text-light">
      <div>
        <div class="pb-3">
          <img
            class="page_image"
            src="https://i.kinja-img.com/gawker-media/image/upload/s--Fic8xpVD--/c_scale,f_auto,fl_progressive,q_80,w_800/mmadas61b3ke1xgzcdsh.jpg"
          >
          <h2 class="py-3 border-bottom border-warning"> PLAYERS </h2>
          <!-- <h2>{{players[0].current_team.name}}</h2> -->
          <div class="bg-dark text-light" v-for="(player, index) in players" :key="index">
            <div v-if="player.current_team">
              <div v-if="player.current_team.image_url != null">
                <h3>&ldquo;{{player.name}}&rdquo;</h3>
                <div class="d-flex justify-content-between bg-info text-light border border-dark">
                  <h4 class="col-sm-4">Current Team:</h4>
                  <h4 v-if="player.current_team" class="col-sm-8">{{player.current_team.name}}</h4>
                </div>
                <div class="d-flex justify-content-center bg-light text-dark">
                  <div>
                    <img class="current_team" v-bind:src="player.current_team.image_url">
                  </div>
                  <!-- <img v-if="player.current_team.image_url" src="player.current_team.image_url"> -->
                </div>
                <div
                  class="d-flex justify-content-between bg-info text-light border border-dark"
                  v-if="player.hometown"
                >
                  <h4 class="col-sm-4">Origin:</h4>
                  <h4 class="col-sm-4">{{player.hometown}}</h4>
                </div>
              </div>
            </div>
          </div>
          <b-button class="mt-3" href="#">Next Page</b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Players",
  components: {
    // Book
  },
  data() {
    return {
      playersURL: "https://api.pandascore.co/ow/players?sort=name",
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
  //   computed: {
  //     filteredBooks() {
  //       return this.books.filter(book => {
  //         return (
  //           book.titulo.toLowerCase().includes(this.search.toLowerCase()) ||
  //           book.descripcion.toLowerCase().includes(this.search.toLowerCase())
  //         );
  //       });
  //     }
  //   }
};
</script>

<style>
@media screen and (min-width: 500px) {
}

.page_image {
  width: 100%;
}

.current_team {
  width: 75%;
  height: 250px;
}
</style>
