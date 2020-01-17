<template>
  <div class="container home black white-text section">
    <img alt="Star Wars Logo" src="../assets/logo.png">
    <div class="row" v-if="episode_order.length">
    <div class="col s12 m6" v-for="(film, i) in episode_order" :key="i">
      <div class="card medium blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">{{ film.title}}</span>
          <table>
            <thead>
              <tr>
              <th>Episode</th>
              <th>Director</th>
              <th>Producer</th>
              <th>Release</th>
              </tr>
            </thead>
            <tbody>
              <tr>
              <td>{{film.episode_id}}</td>
              <td>{{film.director}}</td>
              <td>{{film.producer}}</td>
              <td>{{film.release_date}}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="section">{{film.opening_crawl}}</div>

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
  name: 'home',
  data() {
    return {
      title: 'Films',
    };
  },
  components: {},
  computed: {
    ...mapState([]),
    ...mapGetters(['episode_order']),
  },
  methods: {
    ...mapMutations([]),
    ...mapActions([]),
  },
  mounted() {},
};
</script>
