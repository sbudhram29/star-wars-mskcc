<template>
  <div id="app">
    <div id="nav" class="black">
      <img alt="Star Wars Logo" src="./assets/logo.png" />
      <div class="section white-text">
        <div class="divider"></div>
        <router-link to="/">Home</router-link>&nbsp;|
        <router-link to="/planets">Planets</router-link>&nbsp;|
        <router-link to="/species">Species</router-link>&nbsp;|
        <router-link to="/people">People</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-size: 1.24rem;
  font-weight: bold;
  color: #ffffff;
}

#nav a.router-link-exact-active {
  color: #dd0707;
}
</style>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import mixins from "@/mixins/mixins";

export default {
  name: "app",
  mixins: [mixins],
  data() {
    return {};
  },
  components: {},
  computed: {},
  methods: {
    ...mapActions(["getFilms", "getCharacters", "getSpecies", "getPlanets"])
  },
  created() {
    this.getFilms();
    this.getPlanets();
    this.getSpecies();
    this.getCharacters();
  }
};
</script>
