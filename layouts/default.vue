<template>
  <v-app>
    <AppHeader />
    <v-main>
      <nuxt />
    </v-main>
    <AppFooter />
    <AppCart ref="cart" />
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import AppCart from '@/components/AppCart.vue'

export default {
  components: {
    AppHeader,
    AppFooter,
    AppCart
  }
}
</script>

<style>
/* estilos personalizados */
</style>
