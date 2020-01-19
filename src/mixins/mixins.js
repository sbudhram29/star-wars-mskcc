export default {
  methods: {
    getLink: function(item) {
      return item.url.replace('https://swapi.co/api', '');
    },
    getFilmLink: function(item) {
      return `/films/${item.episode_id}`;
    }
  }
};
