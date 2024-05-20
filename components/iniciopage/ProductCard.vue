<template>
  <v-card>
    <v-card-title>{{ product.name }}</v-card-title>
    <v-card-subtitle>{{ product.price }}</v-card-subtitle>
    <v-card-actions>
      <v-btn color="primary" @click="$emit('add-to-cart', product)">
        Agregar al carrito
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    product: Object
  }
}
</script>
