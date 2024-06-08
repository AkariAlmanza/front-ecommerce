<template>
  <v-container>
    <h1>Detalles del Pago</h1>
    <v-form>
      <v-text-field v-model="cardNumber" label="Número de Tarjeta" />
      <v-text-field v-model="expiryDate" label="Fecha de Expiración" />
      <v-text-field v-model="cvv" label="CVV" type="password" />
      <v-btn color="#56B280" @click="pay">
        Pagar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    }
  },
  methods: {
    pay () {
      // Aquí iría la lógica para procesar el pago
      this.$router.push('/checkout/thankyou')
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
