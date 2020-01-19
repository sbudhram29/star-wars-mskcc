<template>
  <div class="black white-text section">
    <div class="row" v-if="episode_order.length">
      <div
        class="col s12 m12 l6 offset-l3"
        v-for="(film, i) in episode_order.filter( episode => episode.episode_id == $route.params.id)"
        :key="i"
      >
        <div class="card grey lighten-5">
          <div class="card-content black-text">
            <h4>{{film.title}}</h4>
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
            <div class="section col s12" v-if="planets.length">
              <div class="divider"></div>
              <List :items="planets" :currentItem="film" title="Planets" itemKey="planets" />
            </div>
            <div class="section col s12" v-if="planets.length">
              <div class="divider"></div>
              <List
                :items="characters"
                :currentItem="film"
                title="Characters"
                itemKey="characters"
              />
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
import List from "@/components/List";

export default {
  name: "Film",
  data() {
    return {
      title: "Film"
    };
  },
  components: { List },
  computed: {
    ...mapState(["films", "characters", "planets"]),
    ...mapGetters(["episode_order"])
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([])
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
</style>