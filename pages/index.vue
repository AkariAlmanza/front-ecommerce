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
        <h2>Productos</h2>
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
        <h2>Testimonios</h2>
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
    { id: 1, name: 'Spiced Mint', price: 9.99, image: '/images/producto1.png' },
    { id: 2, name: 'Sweet Strawberry', price: 9.99, image: '/images/producto2.png' },
    { id: 3, name: 'Cool Blueberries', price: 9.99, image: '/images/producto3.png' }
    // más productos
  ]
}

function fetchReviews () {
  // Simulando una llamada a una API para obtener reseñas de clientes
  return [
    { id: 1, name: 'Laura', date: '2024-05-25', text: 'Excelente producto, muy recomendado.' },
    { id: 2, name: 'Alejandro', date: '2024-05-24', text: 'Buena calidad y entrega rápida.' },
    { id: 3, name: 'Julieta', date: '2024-05-23', text: 'Muy satisfecha con mi compra.' }
    // más reseñas
  ]
}
</script>

<style scoped>
/* estilos personalizados */
</style>
