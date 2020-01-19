<template>
  <div class="black white-text section">
    <h1>{{title}}</h1>
    <div class="row" v-if="species.length">
      <div class="col s12 m6" v-for="(sp, i) in species" :key="i">
        <div class="card large grey lighten-5">
          <div class="card-content black-text">
            <span class="card-title">{{ sp.name}}</span>
            <div class="section">
              <div class="divider"></div>
              <ul class="collection with-header black-text">
                <li class="collection-header">
                  <h4>Films</h4>
                </li>
                <li
                  class="collection-item"
                  v-for="(film,i) in films.filter(s => sp.films.includes(s.url)).map(s => s.title)"
                  :key="'film_'+ i"
                >{{film}}</li>
              </ul>
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

export default {
  name: "planets",
  data() {
    return {
      title: "Species"
    };
  },
  components: {},
  computed: {
    ...mapState(["species", "films"]),
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
