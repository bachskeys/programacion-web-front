<template>
  <div class="home">
    <h1>Peliculas</h1>
    <Table :campos="campos" :items="returnPeliculas" >
      <template slot="actions" slot-scope="{ item } ">
       <b-button
              size="sm"
              class="ml-2"
              variant="outline-danger"
              @click="onEliminar(item)"
            >
              Eliminar
            </b-button>
            <b-button
              size="sm"
              variant="outline-primary"
              @click="onEditar(item)"
            >
              Editar
            </b-button>
        </template>
    </Table>
        <b-button to="/Agregar" variant="primary" class="mb-3">Agregar</b-button>

  </div>
</template>

<script>
import Table from '../components/Table'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Peliculas',
  components: {
    Table
  },
  data() {
    return {
      campos: [
        { key: 'id', label: 'Clave' },
        { key: 'director', label: 'director'},
        { 
          key: 'Titulo', 
          label: 'Titulo'
          },
        { 
          key: 'Anio', 
          label: 'Año de publicacion', },
        { key: 'actions', label: 'Acciones'},

      ]
    }  
  },  
  computed: {
    ...mapGetters(['returnPeliculas',])
  },
  methods: {
    ...mapActions(['getPeliculas','borrarPelicula']),
    onEditar(item){
         this.$router.push({
        name: 'Editar',
        params: {
          id: item.item.id
        }
      })
    },
    onEliminar(item){
        this.borrarPelicula(item.item.id);
        window.location.reload()
    }
  },
  mounted() {
    this.getPeliculas();
  }
}
</script>