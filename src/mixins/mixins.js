export default {
  methods: {
    getLink: function(item) {
      return item.url.replace('https://swapi.co/api', '');
    }
  }
};
