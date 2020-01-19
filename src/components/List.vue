<template>
  <div>
    <ul class="collection with-header black-text">
      <li class="collection-header">
        <h5>{{ title }}</h5>
      </li>
      <li
        class="collection-item"
        v-for="(item,i) in items.filter(s => currentItem[itemKey].includes(s.url))"
        :key="itemKey + '_'+ i"
      >
        <router-link :to="getLink(item)">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mixins from "@/mixins/mixins";

export default {
  name: "List",
  props: ["items", "title", "currentItem", "itemKey"],
  mixins: [mixins],
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState([])
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