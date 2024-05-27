<template>
  <v-app-bar app>
    <v-toolbar-title>Tienda</v-toolbar-title>
    <v-spacer />
    <v-btn icon @click="toggleDialog">
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          Carrito de Compras
        </v-card-title>
        <v-card-text>
          <!-- Contenido del carrito de compras -->
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  methods: {
    toggleDialog () {
      this.dialog = !this.dialog
    }
  }
}
</script>

<style scoped>
/* Estilos personalizados */
</style>
