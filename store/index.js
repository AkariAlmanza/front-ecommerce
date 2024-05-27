export const state = () => ({
  cart: []
})

export const mutations = {
  addToCart (state, product) {
    state.cart.push(product)
  },
  removeFromCart (state, index) {
    state.cart.splice(index, 1)
  }
}
