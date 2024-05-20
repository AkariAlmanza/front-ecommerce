<template>
  <v-app-bar app>
    <v-toolbar-title>My E-commerce</v-toolbar-title>
    <v-btn text to="/">
      Home
    </v-btn>
    <v-btn text to="/shop">
      Shop
    </v-btn>
    <v-btn text to="/cart">
      Cart
    </v-btn>
    <v-btn text to="/profile">
      Profile
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'BarNav'
}
</script>
