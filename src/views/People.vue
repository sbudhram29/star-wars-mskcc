<template>
  <div class="black white-text section">
    <h1>{{title}}</h1>
    <div class="row" v-if="characters.length">
      <div class="col s12 m12 l6 offset-l3" v-for="(character, i) in characters" :key="i">
        <div class="card grey lighten-5">
          <div class="card-content black-text">
            <span class="card-title">{{ character.name}}</span>
            <table>
              <thead>
                <tr>
                  <th>Eyes</th>
                  <th>Birth Year</th>
                  <th>Homeworld</th>
                  <th>Species</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{{character.eye_color}}</td>
                  <td>{{character.birth_year}}</td>
                  <td>{{planets.filter( planet => planet.url === character.homeworld).map( home => home.name).join(',')}}</td>
                  <td>{{species.filter(s => character.species.includes(s.url)).map(s => s.name).join(",")}}</td>
                </tr>
              </tbody>
            </table>
            <div class="section">
              <FilmList :item="character" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import { mapActions } from "vuex";

import FilmList from "@/components/FilmList";

export default {
  name: "people",
  data() {
    return {
      title: "People"
    };
  },
  components: { FilmList },
  computed: {
    ...mapState(["characters", "species", "planets"]),
    ...mapGetters([])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([])
  },
  mounted() {}
};
</script>

<style scoped>
h1 {
  margin-top: -3rem;
}
</style>
