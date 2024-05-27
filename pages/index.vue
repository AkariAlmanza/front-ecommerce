<template>
  <v-container>
    <!-- Imagen destacada -->
    <v-row>
      <v-col cols="12">
        <v-img src="/images/principal.jpg" alt="Imagen destacada" aspect-ratio="2.75" />
      </v-col>
    </v-row>

    <!-- Productos -->
    <v-row>
      <v-col cols="12">
        <h2>Productos Destacados</h2>
      </v-col>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card :to="`/product/${product.id}`">
          <v-img :src="product.image" aspect-ratio="1.75" />
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }} USD</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Reseñas de Clientes -->
    <v-row>
      <v-col cols="12">
        <h2>Reseñas de Clientes</h2>
      </v-col>
      <v-col v-for="review in reviews" :key="review.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ review.name }}</v-card-title>
          <v-card-subtitle>{{ review.date }}</v-card-subtitle>
          <v-card-text>{{ review.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  async asyncData () {
    const products = await fetchProducts()
    const reviews = await fetchReviews()
    return { products, reviews }
  }
}

function fetchProducts () {
  // Simulando una llamada a una API para obtener productos
  return [
    { id: 1, name: 'Producto 1', price: 100, image: 'https://via.placeholder.com/400x300' },
    { id: 2, name: 'Producto 2', price: 200, image: 'https://via.placeholder.com/400x300' },
    { id: 3, name: 'Producto 3', price: 300, image: 'https://via.placeholder.com/400x300' }
    // más productos
  ]
}

function fetchReviews () {
  // Simulando una llamada a una API para obtener reseñas de clientes
  return [
    { id: 1, name: 'Cliente 1', date: '2024-05-25', text: 'Excelente producto, muy recomendado.' },
    { id: 2, name: 'Cliente 2', date: '2024-05-24', text: 'Buena calidad y entrega rápida.' },
    { id: 3, name: 'Cliente 3', date: '2024-05-23', text: 'Muy satisfecho con mi compra.' }
    // más reseñas
  ]
}
</script>

<style scoped>
/* estilos personalizados */
</style>
