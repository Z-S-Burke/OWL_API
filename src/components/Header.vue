<template>
  <div id="app">
    <b-navbar class="bg-dark" toggleable="lg" type="dark" variant="dark" top="fixed" id="navbar">
      <b-navbar-brand>
        <router-link to="/" class="d-flex align-items-center-text-light ml-2">
          <img class="logo" src="../assets/Overwatch_League_logo.svg">
          <h2 class="ml-2 mt-2 text-light">OWL API</h2>
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

        <b-navbar-nav>
          <b-nav-item>
            <router-link class="text-light" to="/chat"> Live Chat </router-link>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {}
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