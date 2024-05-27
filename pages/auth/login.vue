<template>
  <v-container>
    <h1>Iniciar Sesión</h1>
    <v-form>
      <v-text-field
        v-model="email"
        label="Correo Electrónico"
      />
      <v-text-field
        v-model="password"
        label="Contraseña"
        type="password"
      />
      <v-btn color="primary" @click="login">
        Iniciar Sesión
      </v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      // Aquí iría la lógica para iniciar sesión
    }
  }
}
</script>

<style scoped>
/* estilos personalizados */
</style>
