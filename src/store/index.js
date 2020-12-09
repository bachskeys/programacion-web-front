import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pelicula:null,
    generos: [],
    peliculas:[],
    peliculasGenero:[],
  },
  mutations: {
    SET_PELICULAS(state,peliculas){
      state.peliculas = peliculas;
    },
    SET_GENEROS(state, generos){
      state.generos = generos
    },
    SET_PELICULAS_GENEROS(state,peliculas){
      state.peliculasGenero = peliculas;
    },
    SET_PELICULA(state,pelicula){
      state.pelicula=pelicula;
    }
  },
  actions: {
    borrarPelicula({commit},param){
      axios.delete('http://localhost:3000/borrar-pelicula/',{data:{id:param}}).then((response)=>{
      })
    },
    getPeliculasGenero({commit}, params){
      axios.get(`http://localhost:3000/generos/${params}`, )
      .then((response)=>{
        commit('SET_PELICULAS_GENEROS',response.data)
      })
      .catch(onError)
    },
    crearPelicula({commit},{params}){
      axios.post('http://localhost:3000/crear-pelicula',params).then((response)=>{
      })
    },
    getPeliculas({commit}){
      axios.get('http://localhost:3000/').then((response)=>{
        commit('SET_PELICULAS',response.data)
      })
    },
     getPelicula({commit},{id,onComplete}){
        axios.get(`http://localhost:3000/pelicula/${id}`).then(onComplete)
    },
    actualizarPelicula({commit},{params}){
      axios.put('http://localhost:3000/editar-pelicula/',params).then((response)=>{
      })
    },
    getGeneros({commit}){
      commit('SET_LOADING', true)
      axios.get('http://localhost:3000/generos')
      .then(response => {
        commit('SET_GENEROS', response.data);
      })
      .finally(() => commit('SET_LOADING', false))
    },
    setGenero({commit},data){
      axios.post('http://localhost:3000/crear-genero',{genero:data}).then((response)=>{
     })
      .catch(error=>console.log(error))
    },

  },
  getters: {
    returnPeliculasGenero: state => {
      return state.peliculasGenero;
    },
    returnPeliculas: state =>{
      return state.peliculas;
    },
    returnGeneros: state => {
      return state.generos.map((genero)=>{
        return{value:genero.id,text:genero.genero}
      })
    },
  }
})