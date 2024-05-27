<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.image"></v-img>
      </v-col>
      <v-col cols="12" md="6">
        <h1>{{ product.name }}</h1>
        <h2>{{ product.price }} USD</h2>
        <p>{{ product.description }}</p>
        <v-btn color="primary" @click="addToCart(product)">Agregar al Carrito</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  asyncData ({ params }) {
    const product = fetchProductById(params.id)
    return { product }
  },
  methods: {
    addToCart (product) {
      this.$store.commit('addToCart', product)
    }
  }
}

function fetchProductById (id) {
  const products = [
    { id: 1, name: 'Spiced Mint', price: 9.99, image: '/images/producto1.png', description: 'Descripción del Producto 1' },
    { id: 2, name: 'Sweet Strawberry', price: 9.99, image: '/images/producto2.png', description: 'Descripción del Producto 2' },
    { id: 3, name: 'Cool Blueberries', price: 9.99, image: '/images/producto3.png', description: 'Descripción del Producto 3' }
    // más productos si los tienes
  ]

  return products.find(product => product.id === parseInt(id))
}
</script>

<style scoped>
/* estilos personalizados */
</style>
