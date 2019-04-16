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
            <h2 class="py-3 border-bottom border-warning bg-light text-dark">PAST TOURNAMENTS</h2>
          </div>
          <div
            class="bg-light text-dark m-3 player_card"
            v-for="tournament of tournaments" v-bind:key="tournament.id">
                <figure> 
                <h2 style="font-style: italic"> {{tournament.league.name}} </h2>
                <p> &#40;{{tournament.serie.full_name}}&#41;</p>
                    <b-button size="lg" class="mb-3 bg-info"> Matches for {{tournament.name}} </b-button>
                    <div v-for="match of tournament.matches" v-bind:key="match.id"> 
                        <h3 class="my-3" style="text-decoration: underline"> {{match.name}} </h3>
                        <div>
                            <div class="d-flex justify-content-between align-content-center" > 
                                <h6> &#40;Best of {{match.number_of_games}}&#41;</h6>
                                <h6> Match ID: {{match.id}} </h6>
                            </div>
                            <div v-for="team of tournament.teams" v-bind:key="team.id"> 
                                <div class="d-flex justify-content-between align-items-center border border-bottom border-secondary" v-if="team.id == match.winner_id">
                                    <h5> Winner: {{team.name}} </h5>
                                    <img v-if="team.image_url != null" class="winner_logo" v-bind:src="team.image_url">
                                    <h5> Winner ID: {{match.winner_id}} </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <figcaption> 
                        <p> Last modified at {{tournament.league.modified_at}} </p> 
                    </figcaption>
                </figure>
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
  name: "Tournaments",
  components: {
    // Book
  },
  data() {
    return {
      tourneyURL: "https://api.pandascore.co/ow/tournaments/past",
      tournaments: [],
      search: ""
    };
  },
  methods: {
    getData(tourneyURL) {
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + tourneyURL, {
        headers: {
          Authorization:
            "Bearer 2Yes3_EgUod9qA4WVNtcbhLlL0oLfH-Uu7CuCPG7BXSjl_boqa8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.tournaments = data;
          console.log(this.tournaments);
        })
        .catch(err => {
          throw err;
        });
    }
  },
  created() {
    this.getData(this.tourneyURL);
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

.info_text {
  font-weight: bold;
}
.current_team {
  width: 75%;
}

.winner_logo {
    height: 100px;
    width: 100px;
}
</style>
