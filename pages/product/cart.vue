<template>
  <v-container>
    <h1>Carrito de Compras</h1>
    <v-list>
      <v-list-item v-for="(item, index) in cartItems" :key="index">
        <v-list-item-content>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
          <v-list-item-subtitle>{{ item.price }} USD</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn icon @click="removeFromCart(index)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-btn color="primary" @click="$router.push('/checkout/shipping')">
      Proceder al Pago
    </v-btn>
  </v-container>
</template>

<script>
export default {
  computed: {
    cartItems () {
      return this.$store.state.cart
    }
  },
  methods: {
    removeFromCart (index) {
      this.$store.commit('removeFromCart', index)
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
