<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>
            Register
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field v-model="email" label="Email" />
              <v-text-field -model="password" type="password" label="Password" />
              <v-btn color="primary" @click="register">
                Register
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
    register () {
      // Implementar la lógica de registro aquí
      alert('Register no implementado')
    }
  }
}
</script>
