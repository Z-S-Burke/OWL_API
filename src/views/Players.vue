<template>
  <div id="app">
    <div class="bg-dark text-light p-1 mb-3">
      <div>
        <div>
          <img
            class="page_image"
            src="https://i.kinja-img.com/gawker-media/image/upload/s--Fic8xpVD--/c_scale,f_auto,fl_progressive,q_80,w_800/mmadas61b3ke1xgzcdsh.jpg"
          >
          <h2 class="mt-2">PLAYERS</h2>
          <div v-for="player of players">
            <h3>{{player.name}}</h3>
            <div class="d-flex justify-content-between bg-light text-dark">
              <h4 class="col-sm-4">Current Team:</h4>
              <h4 class="col-sm-8">Team Name</h4>
            </div>
            <div class="d-flex justify-content-center bg-light text-dark">
              <h4> team_image</h4>
            </div>
            <div class="d-flex justify-content-between bg-light text-dark" v-if="player.hometown">
              <h4 class="col-sm-4">Origin:</h4>
              <h4 class="col-sm-4">{{player.hometown}}</h4>
            </div>
          </div>
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
      playersURL: "https://api.pandascore.co/ow/players",
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
  mounted() {
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
.page_image {
  width: 100%;
}
</style>
