<template>
  <v-app-bar color="#56B280">
    <v-toolbar-title color="#56B280">
      Candleaf
    </v-toolbar-title>
    <v-spacer />
    <v-btn to="/product/cart" icon>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn to="/auth/login" icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title class="headline">
          Carrito de Compras
        </v-card-title>
        <v-card-text>
          <v-list>
            <v-list-item v-for="item in cartItems" :key="item.id">
              <v-list-item-content>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.price }} USD x {{ item.quantity }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn icon @click="removeFromCart(item.id)">
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
          <v-spacer />
          <v-btn color="primary" @click="dialog = false">
            Cerrar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data () {
    return {
      dialog: false
    }
  },
  computed: {
    ...mapGetters(['cartItems', 'cartTotal'])
  },
  methods: {
    ...mapMutations(['removeFromCart']),
    removeFromCart (productId) {
      this.removeFromCart(productId)
    },
    checkout () {
      this.$router.push('/checkout/shipping')
    },
    goToLogin () {
      this.$router.push('/login')
    },
    goToRegister () {
      this.$router.push('/register')
    }
  }
}
</script>
