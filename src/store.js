import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        title: 'Star Wars',
        films: [],
        characters: [],
        species: [],
        planets: [],
    },
    getters: {
        episode_order: state => state.films.sort((a, b) => a.episode_id - b.episode_id),
    },
    mutations: {
        ADD_FILMS: (state, payload) => {
            state.films.push(...payload);
        },
        ADD_CHARACTERS: (state, payload) => {
            state.characters.push(...payload);
        },
        ADD_SPECIES: (state, payload) => {
            state.species.push(...payload);
        },
        ADD_PLANETS: (state, payload) => {
            state.planets.push(...payload);
        },
    },
    actions: {

        getFilms: (context) => {
            const url = "https://swapi.co/api/films"
            axios.get(url).then(res => context.commit('ADD_FILMS', res.data.results)).catch(err => console.log(`Failed: ${err}`))
        },
        getCharacters: (context, url = "https://swapi.co/api/people") => {
            axios.get(url).then(res => {
                context.commit('ADD_CHARACTERS', res.data.results)
                if (res.data.next) {
                    context.dispatch('getCharacters', res.data.next)
                }
            }
            )
        },
        getSpecies: (context, url = "https://swapi.co/api/species") => {
            axios.get(url).then(res => {
                context.commit('ADD_SPECIES', res.data.results)
                if (res.data.next) {
                    context.dispatch('getSpecies', res.data.next)
                }
            }
            )
        },
        getPlanets: (context, url = "https://swapi.co/api/planets") => {
            axios.get(url).then(res => {
                context.commit('ADD_PLANETS', res.data.results)
                if (res.data.next) {
                    context.dispatch('getPlanets', res.data.next)
                }
            }
            )
        }
    }
});
