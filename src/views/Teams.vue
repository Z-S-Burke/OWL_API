<template>
  <div id="app">
    <div class="page_background bg-dark text-light p-1">
      <div>
        <div>
          <img
            class="page_image"
            src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-40f002676ef0d61a27cee08d85358575bee03e5b2374f52d2fa1b2b7fb0f061ada398c1c99e32189c64d9628b21b091f939c84ed6066ad179193de6a6305e004.jpg"
          >
          <div>
            <a name="#top">
              <h2 class="py-3 my-2 border-bottom border-warning bg-light text-dark">TEAMS</h2>
            </a>
          </div>
          <div v-for="team of teams" v-bind:key="team.id">
            <div v-if="team.players.length != 0 && team.image_url != null">
              <div class="bg-light pb-3" v-if="team.image_url">
                <div v-if="team.image_url != null">
                  <img class="current_team mt-3" v-bind:src="team.image_url">
                </div>
              </div>
              <div class="d-flex mt-1 justify-content-around align-items-center bg-info text-light">
                <div v-if="team.acronym">
                  <h3>&#40;{{team.acronym}}&#41;</h3>
                </div>
                <div>
                  <h2>{{team.name.toUpperCase()}}</h2>
                </div>
              </div>
              <div v-bind:key="team.id">
                <Roster :oneRoster="team"/>
              </div>
              <div class="d-flex justify-content-between bg-light text-dark" v-if="team.hometown">
                <h4 class="col-sm-4">Origin:</h4>
                <h4 class="col-sm-4">{{team.hometown}}</h4>
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
  width: 100%;
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
</style>
