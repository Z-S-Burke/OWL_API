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
          <div v-for="team of teams">
            <h3>{{team.name}}</h3>
            <div
              v-for="teamMember of teams"
              class="d-flex justify-content-between bg-light text-dark"
            >
              <h4 class="col-sm-8">{{team.players.name}}</h4>
            </div>
            <div
              class="d-flex justify-content-center bg-light text-dark"
              v-if="team.image_url != null"
            ></div>
            <div class="d-flex justify-content-between bg-light text-dark" v-if="team.hometown">
              <h4 class="col-sm-4">Origin:</h4>
              <h4 class="col-sm-4">{{team.hometown}}</h4>
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
      teamsURL: "https://api.pandascore.co/ow/teams",
      teams: [],
      teamMembers: [],
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
