<template>
  <div id="app">
    <b-navbar class="bg-dark" toggleable="lg" type="dark" variant="dark" top="fixed">
      <b-navbar-brand>
        <router-link to="/" class="d-flex align-items-center-text-light ml-2">
          <img class="logo" src="../assets/Overwatch_League_logo.svg">
          <h1 class="ml-2 text-light">OWL API</h1>
        </router-link>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/">Home</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/teams">Teams</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/players">Players</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/tournaments">Past Tournaments</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/schedule">Match Schedule</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/maps">Map Overviews</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Messages</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search the site..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  height: 50px;
  width: 50px;
}

.logo_text {
  text-decoration: none;
}

.custom_bg_color {
  background-color: rgb(241, 144, 16);
}
</style>

