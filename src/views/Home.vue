<template>
  <div class="black white-text section">
    <h1>{{title}}</h1>
    <div class="row" v-if="episode_order.length">
      <div class="col s12 m12 l6 offset-l3" v-for="(film, i) in episode_order" :key="i">
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
          </div>
          <div class="card-action">
            <router-link :to="getLink(film)">More Info</router-link>
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
import mixins from "@/mixins/mixins";

export default {
  name: "home",
  mixins: [mixins],
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