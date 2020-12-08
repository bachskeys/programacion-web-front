<template>
  <div class="home">
    <h1>Libros</h1>
    <b-button to="/agregar-libro" variant="primary" class="float-right mb-3">Agregar</b-button>
    <Table :campos="campos" :items="todosLibros" :busy="getLoading">
    </Table>
  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Home',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'Autor', label: 'Autor'},
        { 
          key: 'Numero_paginas', 
          label: 'Numero de Paginas'
          },
        { 
          key: 'Anio_publicacion', 
          label: 'Años de publicacion', }
      ]
    }  
  },  
  computed: {
    ...mapGetters(['todosLibros', 'getLoading'])
  },
  methods: {
    ...mapActions(['setLibros']),
  },
  mounted() {
    this.setLibros();
  }
}
</script>
