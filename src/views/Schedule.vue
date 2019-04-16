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
            <a name=#top> 
              <h2 class="py-3 border-bottom border-warning bg-light text-dark"> SCHEDULE </h2>
            </a>
          </div>
          <div
            class="bg-light text-dark m-3 player_card"
            v-for="tournament of tournaments" v-bind:key="tournament.id">
                <figure> 
                <h2 style="font-style: italic"> {{tournament.league.name}} </h2>
                <p> &#40;{{tournament.serie.full_name}}&#41;</p>
                    <b-button size="lg" class="mb-3 bg-info"> Matches for {{tournament.name}} </b-button>
                    <div class="border border-bottom my-3" v-for="match of tournament.matches" v-bind:key="match.id"> 
                      
                      <div class="d-flex justify-content-between align-content-center"> 
                        <div> 
                          <img class="team_logo" v-bind:src="matchTeam1Name(tournament, match.name)"> 
                        </div>
                        <div class="d-flex align-items-center"> 
                          <h4> {{match.name}} </h4>
                        </div>
                        <div> 
                          <img class="team_logo" v-bind:src="matchTeam2Name(tournament, match.name)">
                        </div>
                      </div>            
                      <div class="d-flex justify-content-between align-content-center" > 
                        <h6> &#40;Best of {{match.number_of_games}}&#41;</h6>
                          <h6> Match ID: {{match.id}} </h6>
                      </div>
                      <div class="d-flex justify-content-between align-content-center" > 
                        <h6> Start Time: </h6>
                        <h6> {{match.begin_at}} </h6>
                      </div>       
                    </div>
                    <figcaption> 
                        <p> Last modified at {{tournament.league.modified_at}} </p> 
                    </figcaption>
              </figure>
            </div>
          </div>
          <b-button class="mb-3 bg-light text-dark" href="#top"> Back to Top </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Schedule",
  components: {
    // Book
  },
  data() {
    return {
      tourneyURL: "https://api.pandascore.co/ow/tournaments/upcoming",
      tournaments: [],
      matchTeams: [],
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
        })
        .catch(err => {
          throw err;
        });
    },
    matchTeam1Name(tournament, matchName) {
      let team1 = "";
      for (let team of tournament.teams) {
        if (team.acronym == matchName.substring(0,3)) {
          return team1 = team.image_url;
        }
      }
    },
    matchTeam2Name(tournament, matchName) {
      let team2 = "";
      let lengthCheck = matchName.length - 3;
      for (let team of tournament.teams) {
        if (team.acronym == matchName.substring(lengthCheck,matchName.length)) {
          return team2 = team.image_url;
        }
      }
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

.team_logo {
    height: 100px;
    width: 100px;
}
</style>
