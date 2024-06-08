<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6">
        <v-img :src="product.image" />
      </v-col>
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-subtitle>{{ product.price }} USD</v-card-subtitle>
          <v-card-text>{{ product.description }}</v-card-text>
          <v-card-actions>
            <v-btn color="#56B280" @click="addToCart(product)">
              Agregar al Carrito
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  asyncData ({ params }) {
    const product = fetchProductById(params.id)
    return { product }
  },
  methods: {
    ...mapMutations(['addToCart']),
    handleaddToCart () {
      this.addToCart(this.product)
      alert('Producto añadido al carrito')
    }
  }
}

function fetchProductById (id) {
  const products = [
    { id: 1, name: 'Spiced Mint', price: 9.99, image: '/images/producto1.png', description: ' La vela aromática "Spiced Mint" ofrece una mezcla refrescante y revitalizante de menta con un toque especiado. Es perfecta para crear un ambiente fresco y energizante en cualquier habitación. Su aroma duradero y equilibrado transformará tu hogar en un oasis de frescura.' },
    { id: 2, name: 'Sweet Strawberry', price: 9.99, image: '/images/producto2.png', description: 'La "Sweet Strawberry" es una vela que captura el dulce y jugoso aroma de las fresas maduras. Al encenderla, llena el espacio con una fragancia deliciosa y acogedora que recuerda a un día de verano. Ideal para momentos de relajación y para endulzar cualquier ambiente.' },
    { id: 3, name: 'Cool Blueberries', price: 9.99, image: '/images/producto3.png', description: 'La vela "Cool Blueberries" envuelve tu hogar con el fresco y afrutado aroma de los arándanos recién cosechados. Su fragancia es suave pero penetrante, perfecta para refrescar y revitalizar cualquier espacio. Es una opción excelente para aquellos que disfrutan de los aromas frutales y vibrantes.' },
    { id: 4, name: 'Juicy Lemon', price: 9.99, image: '/images/producto4.png', description: ' La "Juicy Lemon" es una vela que ofrece un aroma cítrico y revitalizante, como un limón recién cortado. Este aroma es ideal para purificar el aire y dar un toque de frescura a cualquier habitación. Perfecta para usar en la cocina o el baño, donde se necesita una fragancia limpia y enérgica.' },
    { id: 5, name: 'Fresh Orange', price: 9.99, image: '/images/producto5.png', description: 'La vela "Fresh Orange" trae a tu hogar el vibrante y alegre aroma de las naranjas frescas. Su fragancia es cítrica y dulce, llenando el ambiente de energía positiva y calidez. Es perfecta para cualquier momento del día, especialmente para despertar los sentidos por la mañana.' },
    { id: 6, name: 'Fragrant Cinnamon', price: 9.99, image: '/images/producto6.png', description: 'La "Fragrant Cinnamon" ofrece una fragancia cálida y especiada que evoca recuerdos de hogar y festividades. Su aroma a canela es acogedor y reconfortante, ideal para crear un ambiente cálido y agradable en cualquier época del año. Es perfecta para las noches frías o para añadir un toque especial a tus celebraciones.' }
  ]

  return products.find(product => product.id === parseInt(id))
}
</script>

<style scoped>
</style>
