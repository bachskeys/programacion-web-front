<template>
  <div>
      <h1>Agregar libro</h1>
       <b-form @submit.prevent="guardarLibro">
           <Input 
                v-model="libro.Autor"
                label="Autor"
                placeholder="Ingrese nombre de el autor del libro"
                id="autor"
                class="mb-2"
                :error="erroresValidacion && !validacionNombre"
                mensajeError="El autor es obligatorio"
           />
            <Input 
                v-model="libro.Titulo"
                label="Titulo del libro"
                placeholder="Ingrese el Titulo del libro"
                :maxlength="150"
                id="direccion"
                class="mb-2"
                :error="erroresValidacion && !validacionTitulo"
                mensajeError="El titulo es obligatorio"


           />
            <Input 
                v-model="libro.Numero_paginas"
                label="Numero de paginas"
                placeholder="Ingrese el numero de paginas que contiene el libro"
                id="telefono"
                :maxlength="10"
           />
            <Input 
                v-model="libro.Anio_publicacion"
                label="Añor de publicacion"
                placeholder="Ingrese el año de publicacion de libro"
                id="telefono"
                :maxlength="10"
           />
           <b-button variant="primary" type="submit" class="float-right mt-3">
               Guardar
            </b-button>
       </b-form>
  </div>
</template>

<script>
import Input from '../components/Input'
import { mapActions } from 'vuex'
export default {
    name: 'Agregar',
    components: {
        Input
    },
    data() {
        return {
            libro: {
                Autor: '',
                Titulo: '',
                Numero_paginas: '',
                Anio_publicacion:'',
            },
            erroresValidacion: false
        }
    },
    methods: {
        ...mapActions(['crearLibro']),
        guardarLibro(){
           if(this.validacionTitulo && this.validacionAutor) {
                this.erroresValidacion = false;
                this.crearLibro({
                    params: this.libro,
                    onComplete: (response) => {
                        console.log(response)
                        this.$notify({
                            type: 'success',
                            title: response.data.mensaje,
                        });
                        this.$router.push({
                            name: 'Home'
                        })
                    },
                    onError: (error) => {
                        this.$notify({
                            type: 'error',
                            title: error.response.data.mensaje,
                        });
                    }
                })
          } else {
                this.erroresValidacion = true;
            }
        }
    },
    computed: {
    validacionTitulo() {
            return (
                this.libro.Titulo !== undefined && this.libro.Titulo.trim() !== ''
            )
        },
     validacionAutor() {
            return (
                this.libro.Autor !== undefined && this.libro.Autor.trim() !== ''
            )
        }
    }
}
</script>

<style>
</style>