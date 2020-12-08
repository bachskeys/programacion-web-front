import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    libros: [],
    loading: false
  },
  mutations: {
    SET_LIBROS(state, libros){
      state.libros = libros
    },
    SET_LOADING(state, load){
      state.loading = load
    }
  },
  actions: {
    setLibros({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/')
      .then(response => {
        console.log(response);
        commit('SET_LIBROS', response.data);
      })
      .finally(() => commit('SET_LOADING', false))
    },
    crearLibro({commit}, {params, onComplete, onError}){
      axios.post('http://localhost:3000/', params)
      .then(onComplete)
      .catch(onError)
    },

  },
  getters: {
    todosLibros: state => {
      return state.libros
    },
    getLoading: state => {
      return state.loading
    }
  }
})