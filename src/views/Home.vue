<template>
  <div class="black white-text section">
    <h1>{{title}}</h1>
    <div class="row" v-if="episode_order.length">
      <div class="col s12" v-for="(film, i) in episode_order" :key="i">
        <div class="card grey lighten-5">
          <div class="card-content black-text">
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Episode</th>
                  <th>Director</th>
                  <th>Release</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{film.title}}</td>
                  <td>{{film.episode_id}}</td>
                  <td>{{film.director}}</td>
                  <td>{{film.release_date}}</td>
                </tr>
              </tbody>
            </table>
            <span class="flow-text">{{film.opening_crawl}}</span>
          </div>
          <div class="row">
            <div class="section col s12 m6" v-if="characters.length">
              <div class="divider"></div>
              <ul class="collection with-header black-text">
                <li class="collection-header">
                  <h4>Characters</h4>
                </li>
                <li
                  class="collection-item"
                  v-for="(character,i) in characters.filter(s => film.characters.includes(s.url)).map(s => s.name)"
                  :key="'character_'+ i"
                >{{character}}</li>
              </ul>
            </div>
            <div class="section col s12 m6" v-if="planets.length">
              <div class="divider"></div>
              <ul class="collection with-header black-text">
                <li class="collection-header">
                  <h4>Planet</h4>
                </li>
                <li
                  class="collection-item"
                  v-for="(planet,i) in planets.filter(s => film.planets.includes(s.url)).map(s => s.name)"
                  :key="'planet_'+ i"
                >{{planet}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="progress" v-if="!episode_order.length">
      <div class="indeterminate"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "home",
  data() {
    return {
      title: "Films"
    };
  },
  components: {},
  computed: {
    ...mapState(["films", "characters", "planets"]),
    ...mapGetters(["episode_order"])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
    getImgUrl(url) {
      var images = require.context("../assets/", false, /\.webp$/);
      return images(
        "./" +
          url.replace("https://swapi.co/api/", "").replace(/\//g, "_") +
          ".webp"
      );
    }
  },
  mounted() {}
};
</script>

<style scoped>
.table {
  font-size: 1.5rem;
}
.flow-text {
  font-size: 1.5rem;
}
h1 {
  margin-top: -3rem;
}
</style>