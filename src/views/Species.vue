<template>
  <div class="black white-text section">
    <h1>{{title}}</h1>
    <div class="row" v-if="species.length">
      <div class="col s12 m12 l6 offset-l3" v-for="(sp, i) in species" :key="i">
        <div class="card grey lighten-5">
          <div class="card-content black-text">
            <span class="card-title">{{ sp.name}}</span>
            <div class="section">
              <FilmList :item="sp" />
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
  name: "planets",
  data() {
    return {
      title: "Species"
    };
  },
  components: { FilmList },
  computed: {
    ...mapState(["species"]),
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
