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

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em v-if="loginStatus == false">{{userName}}</em>
              <em v-if="loginStatus == true">{{userName}}</em>
            </template>
            <b-dropdown-item v-on:click="login" id="login">Log In</b-dropdown-item>
            <b-dropdown-item to="/chat">User DMs</b-dropdown-item>
          </b-nav-item-dropdown>
          <!-- 
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search the site..."></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

export default {
  name: "Chat",
  components: {},
  data() {
    return {
      userName: "",
      email: "",
      database: firebase.database(),
      loginStatus: false,
      apiKey: "AIzaSyAnt2QYlp9uGG9Lu9v4i_IUt5qdL804uK8",
      authDomain: "owl-api-2f5cc.firebaseapp.com",
      databaseURL: "https://owl-api-2f5cc.firebaseio.com/",
      projectId: "OWL-API",
      storageBucket: "",
      messagingSenderId: "229042165846"
    };
  },
  methods: {
    login() {
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // The signed-in user info.
          let user = result.user;
          console.log("Login successful!");
          console.log(user.displayName);
          console.log(user.email);
          this.email = user.email;
          this.userName = user.displayName;
          this.getPosts();
          this.loginStatus = true;
        })
        .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    },
    getPosts() {
      const postsDiv = document.querySelector("#posts");

      firebase
        .database()
        .ref("posts")
        .on("value", function(data) {
          console.log(data.val());

          const allPosts = data.val();

          let template = "";
          for (key in allPosts) {
            console.log(allPosts[key].author);
            template += `
            <div>
                <p>Author: ${allPosts[key].author}</p>
                <p>Message: ${allPosts[key].body}</p>
                <p>Date: ${allPosts[key].date}</p>
            </div>
            `;
          }
          postsDiv.innerHTML = template;
        });
    },
    writeNewPost() {
      //   console.log("in write post");
      const userInput = document.querySelector("input").value;

      // A post entry.
      let postData = {
        author: this.userName,
        body: this.userInput,
        date: new Date().toISOString()
      };

      console.log(postData);

      // Get a key for a new Post.
      let newPostKey = firebase
        .database()
        .ref()
        .child("posts")
        .push().key;

      // Write the new post's data simultaneously in the posts list and the user's post list.
      let updates = {};
      updates["/posts/" + newPostKey] = postData;

      firebase
        .database()
        .ref()
        .update(updates);

      this.getPosts();
    }
  }
};
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

/* @media screen and (min-width: 768px) {
  #navbar {
    width: 100vw;
    position: fixed;
    z-index: 100;
    height: 70px;
  }
} */
</style> 