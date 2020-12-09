<template>
  <div>
      <h1>Agregar pelicula</h1>
       <b-form  @submit.prevent="guardarPelicula">
           <Input 
                v-model="pelicula.director"
                label="director"
                placeholder="Ingrese nombre de el director de la pelicula"
                id="Artista"
                class="mb-2"
                :error="erroresValidacion"
                mensajeError="El director es obligatorio"
           />
            <Input 
                v-model="pelicula.Titulo"
                label="Titulo de la pelicula"
                placeholder="Ingrese el Titulo de la pelicula"
                id="Titulo"
                class="mb-2"
                :error="erroresValidacion"
                mensajeError="El titulo es obligatorio"


           />
          <b-form-select v-model="selected" :options="returnGeneros" @change="onChange(selected)" class="mb-7">
                 <b-form-select-option :value="null">selecione un genero</b-form-select-option>
           </b-form-select>
            <Input 
                v-model="pelicula.anio"
                label="Añor de publicacion"
                placeholder="Ingrese el año de publicacion de libro"
                id="telefono"
                :maxlength="10"
           />
           <b-button variant="primary" type="submit" class="mt-3">
               Guardar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions,mapGetters } from 'vuex'
export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            pelicula: {
                director: '',
                Titulo: '',
                genero_id: '',
                anio:'',
            },

        }
    },
    methods: {
        ...mapActions(['getGeneros','crearPelicula']),
        guardarPelicula(){
                this.crearPelicula({
                    params: this.pelicula,
                })
                  this.$router.push({
                name: 'peliculas',
             })
        },
         onChange(event){
                this.pelicula.genero_id=event;
    },
    },
    computed: {
     ...mapGetters(['returnGeneros',]),
    },
     mounted() {
    this.getGeneros();
  }
}
</script>

<style>
</style>