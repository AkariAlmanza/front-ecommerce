<template>
  <v-app-bar app>
    <v-toolbar-title> E-Commerce</v-toolbar-title>
    <v-btn to="/" text>
      Inicio
    </v-btn>
    <v-btn to="/cart" text>
      Carrito
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>
