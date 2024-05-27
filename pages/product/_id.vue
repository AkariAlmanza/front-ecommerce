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
  // Aquí iría la llamada a la API para obtener el producto por ID
  return {
    id,
    name: 'Nombre del Producto',
    price: 100,
    description: 'Descripción del producto.',
    image: 'ruta/a/la/imagen.jpg'
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
