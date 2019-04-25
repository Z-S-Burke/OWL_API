<template>
  <div>
    <div class="container">
      <p class="h3 text-primary mt-5">Basic chat example</p>

      <div>
        <button type="button" id="login" v-on:click="login()">Log in!</button>
      </div>

      <div id="isLogin" class="mt-5">
        <div id="chat">
          <p>Simple chat example</p>
          <input type="text">
          <p>{{userName}}</p>
          <button v-on:click="writeNewPost()">Send post</button>
        </div>

        <div
          class="my-2 bg-dark text-light"
          id="posts"
          v-for="post in allPosts"
          :key="post.id"
        >
          <div class="d-flex justify-content-around">
            <p>Author:</p>
            <p>{{post.author}}</p>
          </div>
          <div> 
            <p style="text-italic"> {{post.body}} </p>
          </div>
          Date: {{post.date}}
        </div>
        <div>
          <!-- {{allPosts}} -->
        </div>
      </div>
    </div>
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
      loginStatus: false,
      apiKey: "AIzaSyAnt2QYlp9uGG9Lu9v4i_IUt5qdL804uK8",
      authDomain: "owl-api-2f5cc.firebaseapp.com",
      databaseURL: "https://owl-api-2f5cc.firebaseio.com/",
      projectId: "OWL-API",
      storageBucket: "",
      allPosts: {},
      messagingSenderId: "229042165846"
    };
  },
  methods: {
    login() {
      let database = firebase.database();
      let provider = new firebase.auth.GoogleAuthProvider();

      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
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
        .on("value", data => {
          console.log(data.val());
          console.log(this.allPosts);
          this.allPosts = data.val();
        });
    },
    writeNewPost() {
      console.log("in write post");
      const userInput = document.querySelector("input").value;

      // A post entry.
      let postData = {
        author: this.userName,
        body: userInput,
        date: new Date().toISOString()
      };

      console.log(postData);

      console.log("before newPostKey");
      let newPostKey = firebase
        .database()
        .ref()
        .child("posts")
        .push().key;
      console.log("after newPostKey");

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

<style>
</style>
