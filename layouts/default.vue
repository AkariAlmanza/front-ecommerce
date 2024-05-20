<template>
  <v-app>
    <Navbar />
    <v-main>
      <Nuxt />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import BarNav from '@/components/BarNav.vue'
import PagFondo from '@/components/piePag.vue'

export default {
  components: {
    BarNav,
    PagFondo
  }
}
</script>
