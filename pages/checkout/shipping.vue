<template>
  <v-container>
    <h1>Dirección de Envío</h1>
    <v-form>
      <v-text-field v-model="address" label="Dirección" />
      <v-text-field v-model="city" label="Ciudad" />
      <v-text-field v-model="postalCode" label="Código Postal" />
      <v-btn color="#56B280" @click="$router.push('/checkout/payment')">
        Continuar al Pago
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      address: '',
      city: '',
      postalCode: ''
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
