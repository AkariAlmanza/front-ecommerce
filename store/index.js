export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart (state, product) {
    const item = state.cart.find(item => item.id === product.id)
    if (!item) {
      state.cart.push({ ...product, quantity: 1 })
    } else {
      item.quantity++
    }
  },
  removeFromCart (state, productId) {
    state.cart = state.cart.filter(item => item.id !== productId)
  },
  decreaseQuantity (state, productId) {
    const item = state.cart.find(item => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity--
    } else {
      state.cart = state.cart.filter(item => item.id !== productId)
    }
  },
  clearCart (state) {
    state.cart = []
  }
}

export const getters = {
  cartItems: state => state.cart,
  cartTotal: state => state.cart.reduce((total, item) => total + item.price * item.quantity, 0)

}
