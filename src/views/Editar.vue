<template>
  <div>
      <h1>Editar pelicula</h1>
       <b-form @submit.prevent="editarPelicula">
           <Input 
                v-model="pelicula.director"
                label="director"
                placeholder="Ingrese nombre de el director de la pelicula"
                id="director"
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
                label="Año de publicacion"
                placeholder="Ingrese el año de publicacion de la pelicula"
                id="telefono"
                :maxlength="10"
           />
           <b-button variant="primary" type="submit" class="mt-5">
               Actualizar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Vue from 'vue'
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
                anio:'',
                genero_id:"",
            },
            selected:null
        }
    },
    methods: {
        ...mapActions(['getGeneros','getPelicula','actualizarPelicula']),
        editarPelicula(){
                this.actualizarPelicula({
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
     ...mapGetters(['returnGeneros','returnPelicula']),
    },
      created(){
      this.getGeneros()
      this.getPelicula({
        id: this.$route.params.id,
        onComplete: (response) => {
            Vue.set(this, 'pelicula', response.data[0])
            Vue.set(this,'selected',response.data[0].genero_id)
        }
      })
    }
}
</script>

<style>
</style>