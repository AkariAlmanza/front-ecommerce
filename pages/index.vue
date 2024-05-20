<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>Welcome to My E-commerce</h1>
        <v-carousel>
          <v-carousel-item v-for="i in 4" :key="i"></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" sm="6" md="4">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }}</v-card-subtitle>
          <v-card-actions>
            <v-btn text @click="addToCart(product)">
              Add to Cart
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      products: [
        { id: 1, name: 'Product 1', price: '$10.00', image: 'https://picsum.photos/200/300' },
        { id: 2, name: 'Product 2', price: '$20.00', image: 'https://picsum.photos/200/300' },
        // Add more products as needed
      ]
    }
  },
  methods: {
    addToCart (product) {
      // Implement add to cart functionality
      console.log(`${product.name} added to cart`)
    }
  }
}
</script>
