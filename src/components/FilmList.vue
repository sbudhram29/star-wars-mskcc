<template>
  <div>
    <ul class="collection with-header black-text">
      <li class="collection-header">
        <h5>{{ title }}</h5>
      </li>
      <li
        class="collection-item"
        v-for="(film,i) in films.filter(s => currentItem.films.includes(s.url))"
        :key="'film_'+ i"
      >
        <router-link :to="getLink(film)">{{film.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mixins from "@/mixins/mixins";

export default {
  name: "FilmList",
  props: ["item"],
  mixins: [mixins],
  data() {
    return {
      title: "Film",
      currentItem: this.item
    };
  },
  components: {},
  computed: {
    ...mapState(["films"])
  },
  methods: {},
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