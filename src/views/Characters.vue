<template>
  <div class="container home black white-text section">
    <img alt="Star Wars Logo" src="../assets/logo.png">
    <div class="row" v-if="characters.length">
    <div class="col s12 m6" v-for="(character, i) in characters" :key="i">
      <div class="card large blue-grey darken-1">
        <div class="card-content white-text">
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
            <div class="divider"></div>
              {{films.filter(s => character.films.includes(s.url)).map(s => s.title).join(",")}}
            </div>
            <ul class="collection with-header black-text">
        <li class="collection-header"><h4>Films</h4></li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
        <li class="collection-item">Alvin</li>
      </ul>
        </div>
      </div>
    </div>
  </div>
 </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'characters',
  data() {
    return {
      title: 'Characters',
    };
  },
  components: {},
  computed: {
    ...mapState(['characters', 'species', 'planets', 'films']),
    ...mapGetters([]),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
  mounted() {},
};
</script>
