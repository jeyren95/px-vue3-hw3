export const marketplaceStore = {
  state: { 
    shoppingCart: [],
    totalPrice: 0
  },
  mutations: {
    addItem(state, payload) {
      const itemInShoppingCart = state.shoppingCart.filter((item) => item.id === payload.id)

      if (itemInShoppingCart.length > 0) {
        itemInShoppingCart[0].count++
      } else {
        state.shoppingCart.push(payload)
      }
    },
    deleteItem(state, payload) {
      state.shoppingCart = state.shoppingCart.filter((item) => item.id !== payload)
    },
    calculateTotalPrice(state) {
      state.totalPrice = state.shoppingCart.reduce((acc, curr) =>  acc + (curr.price * curr.count), 0)
    }
  },
}