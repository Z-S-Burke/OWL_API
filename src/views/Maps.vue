<template>
  <div id="app">
    <div class="bg-dark text-light">
      <div>
        <div class="pb-3">
          <img
            class="page_image"
            src="http://www.buffed.de/screenshots/original/2016/05/HEADER_mapguides.jpg"
          >
          <div>
            <h2 class="py-3 border-bottom border-warning bg-light text-dark">MAP OVERVIEWS </h2>
          </div>
          <div class="bg-light text-dark m-3 player_card" v-for="(map, index) in maps" :key="index">
            <div>
              <h3>{{map.name}}</h3>
              <img class="map_image" v-bind:src="map.image_url">
              <div class="d-flex justify-content-between border border-bottom">
                <h6>Game Type:</h6>
                <h6>{{map.game_mode}}</h6>
              </div>
              <div class="d-flex justify-content-between border border-bottom">
                <h6>Map ID:</h6>
                <h6>{{map.id}}</h6>
              </div>
            </div>
          </div>
          <b-button class="mt-3 bg-light text-dark" href="#">NEXT PAGE</b-button>
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
      mapsURL: "https://api.pandascore.co/ow/maps?sort=name",
      maps: [],
      search: ""
    };
  },
  methods: {
    getData(mapsURL) {
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + mapsURL, {
        headers: {
          Authorization:
            "Bearer 2Yes3_EgUod9qA4WVNtcbhLlL0oLfH-Uu7CuCPG7BXSjl_boqa8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.maps = data;
          console.log(this.maps);
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.getData(this.mapsURL);
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

.map_image {
  width: 100%;
  border-style: inset;
}
.info_text {
  font-weight: bold;
}
.current_team {
  width: 75%;
}
</style>
