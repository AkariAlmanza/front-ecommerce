<template>
  <v-container>
    <v.row>
      <v-col cols="12">
        <v-card>
          <v-card-title>
            Carrito de Compras
          </v-card-title>
          <v-card-text>
            <v-list>
              <v-list-item v-for="item in cartItems" :key="item.id">
                <v-list-item-avatar>
                  <img :src="item.image" alt="Product Image">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.price }} USD</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ item.quantity }}</v-list-item-subtitle>
                  <v-list-item-subtitle>{{ item.price * item.quantity }} USD</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <v-btn icon @click="decreaseQuantity(item)">
                    <v-icon color="blue">
                      mdi-minus
                    </v-icon>
                  </v-btn>
                  <v-btn icon @click="increaseQuantity(item)">
                    <v-icon color="blue">
                      mdi-plus
                    </v-icon>
                  </v-btn>
                  <v-btn icon @click="handleremoveFromCart(item.id)">
                    <v-icon color="red">
                      mdi-delete
                    </v-icon>
                  </v-btn>
                </v-list-item-action>
              </v-list-item>
            </v-list>
            <v-divider />
            <v-card-subtitle>Total: {{ cartTotal }} USD</v-card-subtitle>
          </v-card-text>
          <v-card-actions>
            <v-btn color="#56B280" @click="checkout">
              Proceder al checkout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v.row>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapMutations(['removeFromCart', 'addToCart']),
    increaseQuantity (item) {
      this.addToCart(item)
    },
    decreaseQuantity (item) {
      if (item.quantity > 1) {
        this.removeFromCart(item.id)
      }
    },
    handleremoveFromCart (productId) {
      this.removeFromCart(productId)
    },
    checkout () {
      this.$router.push('/checkout/shipping')
    }
  }
}
</script>
