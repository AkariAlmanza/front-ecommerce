<template>
  <v-container>
    <h1>Contáctanos</h1>
    <v-form>
      <v-text-field v-model="name" label="Nombre" />
      <v-text-field v-model="email" label="Correo Electrónico" />
      <v-textarea v-model="message" label="Mensaje" />
      <v-btn color="primary" @click="sendMessage">
        Enviar
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    sendMessage () {
      // Aquí iría la lógica para enviar el mensaje
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
