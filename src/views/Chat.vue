<template>
  <div class="d-flex justify-content-center align-items-center chat_background">
    <div class="text-light">
      <div class="carousel_border" v-if="loginStatus == false">
        <h1
          class="bg-light text-dark font-italic font-weight-bold opacity_tool"
        >Want to chat with other fans?</h1>
      </div>
      <div class="carousel_border">
        <div
          class="carousel_border bg-light text-dark d-flex justify-content-center align-items-center"
          v-if="loginStatus == false"
          v-on:click="login()"
        >
          <h3 id="login" class="font-italic mx-2">Log in with</h3>
          <img
            class="log_in_button mx-2"
            src="http://www.stickpng.com/assets/images/5847f9cbcef1014c0b5e48c8.png"
          >
        </div>
        <div v-if="loginStatus == true">
          <img
            class="page_image"
            src="https://cdn-images-1.medium.com/max/1600/1*fYHu8oLjCov7HA3l81xh0A.jpeg"
          >
        </div>
      </div>

      <div>
        <div class="px-3 my-2" id="posts" v-for="post in allPosts" :key="post.id">
          <div
            v-if="post.author == userName"
            class="bg-info text-light float-right message_box p-2"
          >
            <div class="d-flex flex-column align-items-start">
              <h4 class="mr-3 author">{{post.author}}:</h4>
              <p class="font-italic body_text">{{post.body}}</p>
            </div>
            <div>
              <p class="text-dark">{{post.date}}</p>
            </div>
          </div>
          <div v-if="post.author != userName" class="bg-light text-dark float-left message_box">
            <div class="d-flex flex-column align-items-start">
              <h4 class="mr-3 author">{{post.author}}:</h4>
              <p class="font-italic body_text">{{post.body}}</p>
            </div>
            <div>
              <p>{{post.date}}</p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="loginStatus == true">
        <div class="d-flex bg-dark flex-column fixed-bottom" id="chat">
          <input
            class="border border-info mt-3 text_input d-flex"
            placeholder="Text goes here..."
            type="text"
          >
          <p class="font-bold d-flex justify-content-left">Posting as: {{userName}}</p>
          <button class="bg-light text-dark" v-on:click="writeNewPost()">Send post</button>
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
      showChat: false,
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
          this.email = user.email;
          this.userName = user.displayName;
          this.getPosts();
          this.loginStatus = true;
        })
        .catch(function(error) {
          // Handle Errors here.
          let errorCode = error.code;
          let errorMessage = error.message;
        });
    },
    getPosts() {
      const postsDiv = document.querySelector("#posts");

      firebase
        .database()
        .ref("posts")
        .on("value", data => {
          this.allPosts = data.val();
        });
    },
    writeNewPost() {
      const userInput = document.querySelector("input").value;
      document.querySelector("input").value = "";

      // A post entry.
      let postData = {
        author: this.userName,
        body: userInput,
        date: new Date().toISOString()
      };

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

<style>
.log_in_button {
  width: 100px;
  height: 100px;
}

.text_input {
  scrollwidth: 100%;
}

.message_box {
  width: 75%;
  border: solid;
  margin: 10px;
}

.author {
  font-weight: bold;
}

.body_text {
  text-indent: 15px;
  opacity: 1;
}

.chat_background {
  background-image: url("http://i.imgur.com/diq7MHg.jpg");
  background-size: 1280px;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.opacity_tool {
  opacity: 0.8;
}
</style>
