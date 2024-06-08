<template>
  <v-card
    color="#8FC0A9"
    elevation="0"
    width="500"
  >
    <v-card-title>
      LOGIN
    </v-card-title>
    <v-card-text>
      <v-form
        ref="form"
        v-model="validForm"
      >
        Email:
        <v-text-field
          v-model="email"
          placeholder="Escribe tu correo"
          type="email"
          :rules="correo"
        />
        Password:
        <v-text-field
          v-model="passwordUser"
          placeholder="Escribe tu password"
          type="password"
          :rules="password"
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col cols="6">
          <v-btn block color="#C8D5B9" elevation="0" @click="loginUser">
            <span style="text-transform: none; color: white;">
              LOGIN
            </span>
          </v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn block color="#4A7C59" elevation="0" @click="signupUser">
            <span style="text-transform: none; color: white;">
              SIGNUP
            </span>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      validForm: false,
      email: null,
      passwordUser: null,
      required: [
        v => !!v || 'Required Field'
      ],
      password: [
        v => (v && v.length > 6) || 'Password must be more than 6 chars'
      ],
      correo: [
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  methods: {
    loginUser () {
      this.validForm = this.$refs.form.validate()
      if (this.validForm) {
        // Se puede logear
        const sendData = {
          email: this.email,
          password: this.passwordUser
        }
        const url = 'http://localhost:1026/api/auth/login'
        this.$axios.post(url, sendData)
          .then((res) => {
            // eslint-disable-next-line no-console
            console.log('@@ err => ', res)
            if (res.data.token) {
              localStorage.setItem('token', res.data.token)
              this.$router.push('/checkout/shipping')
              // redirigir a la siguiente pagina
            }
          })
          .catch((err) => {
            // eslint-disable-next-line no-console
            console.log('@@ err => ', err)
          })
      } else {
        alert('Algo esta mal')
      }
    },
    signupUser () {}
  }
}
</script>
