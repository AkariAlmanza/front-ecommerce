<template>
  <v-container>
    <h1>¡Gracias por tu Compra!</h1>
    <p>Tu número de orden es {{ orderNumber }}</p>
    <v-btn color="primary" @click="$router.push('/')">
      Volver a la Tienda
    </v-btn>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      orderNumber: '12345'
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
