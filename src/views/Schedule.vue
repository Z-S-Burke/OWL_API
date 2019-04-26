<template>
  <div id="app">
    <div class="bg-dark text-light">
      <div>
        <div class="pb-3">
          <div>
            <a name="#top">
              <h2 class="py-3 border-bottom border-warning bg-light text-dark">MATCH SCHEDULE</h2>
            </a>
            <div>
              <iframe
                src="https://player.twitch.tv/?channel=overwatchleague"
                frameborder="0"
                allowfullscreen="true"
                scrolling="no"
                height="378"
                width="100%"
              ></iframe>
            </div>
            <div>
              <div v-if="chat == true">
                <b-button class="text-light chat_button" v-on:click="showChat()">Hide Chat</b-button>
                <iframe
                  src="https://www.twitch.tv/embed/overwatchleague/chat"
                  frameborder="0"
                  scrolling="no"
                  height="500"
                  width="100%"
                ></iframe>
              </div>
              <div v-if="chat == false">
                <b-button class="text-light chat_button" v-on:click="showChat()">Show Chat</b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="lds-hourglass d-flex justify-content-center" id="load"></div>
        <div class="match_schedule_container bg-dark mb-3">
          <div
            class="bg-light text-dark p-1"
            v-for="tournament of tournaments"
            v-bind:key="tournament.id"
          >
            <figure class="match_schedule_column p-3">
              <h2 style="font-style: italic">{{tournament.league.name}}</h2>
              <p>&#40;{{tournament.serie.full_name}}&#41;</p>
              <b-button size="lg" class="mb-3 bg-info">Matches for {{tournament.name}}</b-button>
              <div class="my-3" v-for="match of tournament.matches" v-bind:key="match.id">
                <div class="d-flex justify-content-between align-items-center">
                  <h6>&#40;Best of {{match.number_of_games}}&#41;</h6>
                  <div class="d-flex align-items-center">
                    <h6 class="mr-1 font-weight-bold">Match ID:</h6>
                    <h6 class="text-primary">{{match.id}}</h6>
                  </div>
                </div>
                <div class="border border-bottom">
                  <div class="d-flex justify-content-between align-content-center">
                    <div>
                      <img class="team_logo" v-bind:src="matchTeam1Name(tournament, match.name)">
                    </div>
                    <div class="d-flex align-items-center">
                      <h4>{{match.name}}</h4>
                    </div>
                    <div>
                      <img class="team_logo" v-bind:src="matchTeam2Name(tournament, match.name)">
                    </div>
                  </div>
                  <div class="d-flex justify-content-between align-content-center">
                    <h6>Match Date:</h6>
                    <h6>{{formatDate(match.begin_at)}}</h6>
                  </div>
                  <div class="d-flex justify-content-between align-content-center">
                    <h6>Start Time:</h6>
                    <h6>{{formatMatchTime(match.begin_at)}} (CEST)</h6>
                  </div>
                </div>
              </div>
              <figcaption>
                <p>Last modified at {{tournament.league.modified_at}}</p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <b-button class="mb-3 bg-light text-dark" href="#top">Back to Top</b-button>
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
      chat: false,
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
          let element = document.getElementById("load");
          element.classList.remove("lds-hourglass");
        })
        .catch(err => {
          throw err;
        });
    },
    matchTeam1Name(tournament, matchName) {
      /* eslint-disable */
      let team1 = "";
      for (let team of tournament.teams) {
        if (team.acronym == matchName.substring(0, 3)) {
          return (team1 = team.image_url);
        }
      }
    },
    matchTeam2Name(tournament, matchName) {
      /* eslint-disable */
      let team2 = "";
      let lengthCheck = matchName.length - 3;
      for (let team of tournament.teams) {
        if (
          team.acronym == matchName.substring(lengthCheck, matchName.length)
        ) {
          return (team2 = team.image_url);
        }
      }
    },
    showChat() {
      this.chat = !this.chat;
    },
    formatDate(beginDate) {
      let date = beginDate.substring(0, 10);
      return (
        date.substring(9, 10) +
        "/" +
        date.substring(6, 7) +
        "/" +
        date.substring(0, 4)
      );
    },
    formatMatchTime(beginDate) {
      const matchTimeFormatA = beginDate.length - 4;
      const matchTimeFormatB = matchTimeFormatA - 5;
      return beginDate.substring(matchTimeFormatB, matchTimeFormatA);
    }
  },
  created() {
    this.getData(this.tourneyURL);
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

  .match_schedule_column {
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

.team_logo {
  height: 100px;
  width: 100px;
}

.chat_button {
  width: 100%;
  height: 50px;
  font-weight: bold;
  font-size: 24px;
}
</style>
