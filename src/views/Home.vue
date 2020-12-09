<template>
  <div class="home">
    <h1>Generos</h1>
    <Table :campos="campos" :items="returnPeliculasGenero" :busy="getLoading">
    </Table>
     <b-form-select :select-size="4" v-model="selected" :options="returnGeneros" @change="onChange(selected)">
           </b-form-select>
             <h1>Agregar Generos</h1>
             <b-form inline @submit.prevent="guardarGenero" class="m-3">
           <input 
                v-model="genero"
                label="Genero"
                placeholder="Ingrese nombre de el autor del libro"
                id="autor"
                class="mb-7"
           />
           <b-button variant="primary" type="submit">
               Guardar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapActions } from 'vuex'
import Input from '../components/Input'
export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      selected:null,
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'director', label: 'Director'},
        { 
          key: 'Titulo', 
          label: 'Titulo'
          },
        { 
          key: 'Anio', 
          label: 'Año de publicacion', }
      ],
      genero:""
    }  
  },  
  computed: {
    ...mapGetters(['returnGeneros', 'returnPeliculasGenero'])
  },
  methods: {
    ...mapActions(['getGeneros','getPeliculasGenero','setGenero']),
    onChange(event){
      this.getPeliculasGenero(event)
    },
    guardarGenero(){
     this.setGenero(this.genero)
        window.location.reload()
    }
  },
  mounted() {
    this.getGeneros();
  }
}
</script>

