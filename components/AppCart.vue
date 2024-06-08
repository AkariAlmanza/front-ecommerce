<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Carrito de Compras</span>
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item v-for="(item, index) in cartItems" :key="index">
            <v-list-item-content>
              <v-list-item-title>{{ item.name }}</v-list-item-title>
              <v-list-item-subtitle>Cantidad: {{ item.quantity }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ item.price }} USD</v-list-item-subtitle>
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
              <v-btn icon @click="removeFromCart(index)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card-text>
      <v-card-actions>
        <v-btn color="#56B280" text @click="dialog = false">
          Cerrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'AppCart',
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    cartItems () {
      return this.$store.state.cart
    }
  },
  methods: {
    removeFromCart (index) {
      this.$store.commit('removeFromCart', index)
    },
    decreaseQuantity (index) {
      this.$store.commit('decreaseQuantity', index)
    }
  }
}
</script>
