<template>
  <div id="app">
    <div class="page_background bg-light text-dark p-1">
      <div>
        <div class="carousel_border">
          <img class="page_image" src="https://pbs.twimg.com/media/DNqvGfbXkAArLVg.jpg:orig">
        </div>
        <div>
          <a name="#top">
            <h2 class="py-3 my-2 border-bottom border-warning bg-info text-light">TEAMS</h2>
          </a>
        </div>
        <div class="lds-hourglass d-flex justify-content-center bg-dark" id="load"></div>
        <div class="team_card_media_container">
          <div v-for="team of teams" v-bind:key="team.id">
            <div
              class="team_card_media_card"
              v-if="team.players.length != 0 && team.image_url != null"
            >
              <div class="bg-light pb-3" v-if="team.image_url">
                <div v-if="team.image_url != null">
                  <img class="current_team team_card_media_image mt-3" v-bind:src="team.image_url">
                </div>
              </div>
              <div class="d-flex mt-1 justify-content-around align-items-center bg-info text-light">
                <div id="teamName" v-if="team.acronym">
                  <h3 class="team_card_media_name">&#40;{{team.acronym}}&#41;</h3>
                </div>
                <div id="teamName">
                  <h2 class="team_card_media_name">{{team.name.toUpperCase()}}</h2>
                </div>
              </div>
              <div v-bind:key="team.id">
                <Roster class="team_card_media_players_row" :oneRoster="team"/>
              </div>
              <div class="d-flex justify-content-between bg-light text-dark" v-if="team.hometown">
                <h4 class="col-sm-4">Origin:</h4>
                <h4 class="col-sm-4">{{team.hometown}}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="pageNum == 0"
      class="d-flex bg-light py-2 text-dark justify-content-center align-items-center"
    >
      <b-button
        class="bg-light text-dark mx-3 px-3"
        v-on:click="getData(teamsURL[0]), pageNum = 0"
        href="#top"
      >1</b-button>
      <b-button
        class="bg-dark text-light px-3 mx-3"
        v-on:click="getData(teamsURL[1]), pageNum = 1"
        href="#top"
      >2</b-button>
      <b-button
        class="bg-dark text-light px-3 mx-3"
        v-on:click="getData(teamsURL[2]), pageNum = 2"
        href="#top"
      >3</b-button>
    </div>
    <div
      v-if="pageNum == 1"
      class="d-flex bg-light py-2 text-dark justify-content-center align-items-center"
    >
      <b-button
        class="bg-dark text-light mx-3 px-3"
        v-on:click="getData(teamsURL[0]), pageNum = 0"
        href="#top"
      >1</b-button>
      <b-button
        class="bg-light text-dark px-3 mx-3"
        v-on:click="getData(teamsURL[1]), pageNum = 1"
        href="#top"
      >2</b-button>
      <b-button
        class="bg-dark text-light px-3 mx-3"
        v-on:click="getData(teamsURL[2]), pageNum = 2"
        href="#top"
      >3</b-button>
    </div>
    <div
      v-if="pageNum == 2"
      class="d-flex bg-light py-2 text-dark justify-content-center align-items-center"
    >
      <b-button
        class="bg-dark text-light mx-3 px-3"
        v-on:click="getData(teamsURL[0]), pageNum = 0"
        href="#top"
      >1</b-button>
      <b-button
        class="bg-dark text-light px-3 mx-3"
        v-on:click="getData(teamsURL[1]), pageNum = 1"
        href="#top"
      >2</b-button>
      <b-button
        class="bg-light text-dark px-3 mx-3"
        v-on:click="getData(teamsURL[2]), pageNum = 2"
        href="#top"
      >3</b-button>
    </div>
  </div>
</template>

<script>
import Roster from "@/components/Roster.vue";
export default {
  name: "Teams",
  components: {
    Roster
  },
  data() {
    return {
      teamsURL: [
        "https://api.pandascore.co/ow/teams?sort=name",
        "https://api.pandascore.co/ow/teams?page=2&sort=name",
        "https://api.pandascore.co/ow/teams?page=3&sort=name"
      ],
      teams: [],
      pageNum: 0,
      teamMembers: [],
      myToggle: false,
      show: true,
      badURL:
        "https://cdn.pandascore.co/images/player/image/17239/unknownpna.jpg",
      search: ""
    };
  },
  methods: {
    getData(teamsURL) {
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";
      fetch(proxyUrl + teamsURL, {
        headers: {
          Authorization:
            "Bearer 2Yes3_EgUod9qA4WVNtcbhLlL0oLfH-Uu7CuCPG7BXSjl_boqa8"
        }
      })
        .then(response => {
          return response.json();
        })
        .then(data => {
          this.teams = "";
          this.teams = data;
          let element = document.getElementById("load");
          element.classList.remove("lds-hourglass");
        })
        .catch(err => {
          throw err;
        });
    },
    showRoster() {
      this.show = !this.show;
    }
  },
  mounted() {
    this.getData(this.teamsURL[0]);
  }
};
</script>

<style>
.page_image {
  width: 100vw;
}

.player_image {
  width: 100%;
  border-style: inset;
}

.player_name {
  font-weight: bold;
}

.team_image {
  border-radius: 15px;
}

.player_card {
  border-width: 5px;
  border-color: rgb(142, 169, 177);
  padding: 10px;
  margin-bottom: 10px;
}

.roster_button {
  width: 95%;
  height: 40px;
  font-size: 20px;
  border: double;
  border-width: 5px;
  background-color: whitesmoke;
}

@media screen and (max-width: 300px) {
  .team_card_media_container {
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flex-wrap: wrap;
    display: flex;
    width: 100vw;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .team_card_media_card {
    width: 33vw;
    flex: 1;
    transition: 0.8s opacity;
  }

  .team_card_media_name {
    font-size: 18px;
  }

  .team_card_media_image {
  }

  #roster_big {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .team_card_media_container {
    display: -ms-flexbox;
    -ms-flex-direction: row;
    -ms-flex-wrap: wrap;
    display: flex;
    width: 100vw;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: white;
  }

  .team_card_media_players_row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 19vw;
  }

  .team_card_media_card {
    width: 19vw;
    flex: 1;
    transition: 0.8s opacity;
  }

  .team_card_media_name {
    font-size: 18px;
  }

  .team_card_media_roster {
    font-size: 14px;
  }

  #roster_small,
  #teamName {
    display: none;
  }

  #roster_big {
    font-size: 24px;
    display: inline-block;
  }

  .team_card_media_image {
  }
}

.lds-hourglass {
}
.lds-hourglass:after {
  content: " ";
  display: block;
  justify-content: center;
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 6px;
  box-sizing: border-box;
  border: 26px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
    display: none;
  }
}
</style>
