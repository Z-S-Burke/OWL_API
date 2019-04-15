<template>
  <div id="app">
    <div class="bg-dark text-light p-1 mb-3">
      <div>
        <div>
          <img
            class="page_image"
            src="https://d2y4mhrku00tr3.cloudfront.net/images/pages/about/team-logos-40f002676ef0d61a27cee08d85358575bee03e5b2374f52d2fa1b2b7fb0f061ada398c1c99e32189c64d9628b21b091f939c84ed6066ad179193de6a6305e004.jpg"
          >
          <h2 class="mt-2 border border-warning">TEAMS</h2>
          <div v-for="team of teams" v-bind:key="team.id">
            <div v-if="team.players.length != 0 && team.image_url != null">
              <div class="d-flex justify-content-around bg-secondary text-light">
                <div v-if="team.acronym">
                  <h3>&#40;{{team.acronym}}&#41;</h3>
                </div>
                <div>
                  <h2>{{team.name.toUpperCase()}}</h2>
                </div>
              </div>
              <div class="border border-light" v-if="team.image_url">
                <div v-if="team.image_url != null">
                  <img class="current_team" v-bind:src="team.image_url">
                </div>
              </div>
              <div class="bg-secondary text-light">
                <h4 class="my-2">Current Players:</h4>
              </div>
              <div
                v-for="player of team.players"
                v-bind:key="player.id"
                class="py-2 d-flex justify-content-left bg-info text-dark border border-dark"
              >
                <div v-if="player.image_url">
                  <div v-if="player.image_url != null">
                    <div v-if="player.image_url != badURL">
                      <img class="player_image" v-bind:src="player.image_url">
                    </div>
                  </div>
                </div>
                <div>
                  <h4 class="player_name mr-3 d-flex justify-content-left">{{player.name}}</h4>
                  <div>
                    <div>
                      <p v-if="player.role != null">Role: {{player.role}}</p>
                      <p v-if="player.hometown != null">Hometown: {{player.hometown}}</p>
                    </div>
                  </div>
                </div>
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
  </div>
</template>

<script>
export default {
  name: "Teams",
  components: {},
  data() {
    return {
      teamsURL: "https://api.pandascore.co/ow/teams?sort=name",
      teams: [],
      teamMembers: [],
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
          this.teams = data;
          console.log(this.teams);
        })
        .catch(err => {
          throw err;
        });
    }
  },
  mounted() {
    this.getData(this.teamsURL);
  }
};
</script>

<style>
.page_image {
  width: 100%;
}

.player_image {
  height: 250px;
  width: 250px;
}

.player_name {
  font-weight: bold;
}
</style>
