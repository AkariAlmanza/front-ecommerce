<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card :to="`/product/${product.id}`">
          <v-img :src="product.image" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }} USD</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData () {
    const products = fetchProducts()
    return { products }
  }
}

function fetchProducts () {
  // Aquí iría la llamada a la API para obtener la lista de productos
  return [
    { id: 1, name: 'Producto 1', price: 100, image: 'ruta/a/imagen1.jpg' },
    { id: 2, name: 'Producto 2', price: 200, image: 'ruta/a/imagen2.jpg' }
    // más productos
  ]
}
</script>

<style scoped>
/* estilos personalizados */
</style>
