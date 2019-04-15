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
          <div
            class="bg-light text-dark m-3 player_card"
            v-for="(player, index) in players"
            :key="index"
          >
            <div v-if="player.current_team">
              <div v-if="player.current_team.image_url != null">
                <h3>&ldquo;{{player.name}}&rdquo;</h3>
                <div v-if="player.image_url != null">
                  <img class="player_image" v-bind:src="player.image_url">
                </div>
                <div class="d-flex justify-content-between bg-light text-dark">
                  <h4 class="col-sm-4">Current Team:</h4>
                  <h4 v-if="player.current_team" class="col-sm-8">{{player.current_team.name}}</h4>
                </div>
                <div class="d-flex justify-content-center bg-light text-dark">
                  <figure>
                    <img class="current_team" v-bind:src="player.current_team.image_url">
                    <figcaption>
                      <div>{{player.current_team.name}}</div>
                    </figcaption>
                  </figure>
                </div>
                <div class="d-flex justify-content-between text-dark" v-if="player.hometown">
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
          console.log(this.players);
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
}
</style>
