import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({ cart: [] }),
  getters: {
    // Le total du panier qu'on va afficher dans le Header
    total: (state) => state.cart.length,
    // Permet de vérifier si un film est dans le panier
    has(state) {
      return (movie) => {
        return state.cart.find((item) => item.movie.id === movie.id)
      }
    }
  },
  actions: {
    add(movie) {
      console.log(this)
      this.cart.push({ movie, quantity: 1 })
    },
    delete(movie) {
      // [{}, {}, {}]
      const item = this.cart.find((item) => {
        return item.movie.id === movie.id
      })
      const index = this.cart.indexOf(item)
      this.cart.splice(index, 1)
    }
  }
})

const frigo = {
  yaourt: 3,
  beer: 2,
  siri() {
    console.log(`Dans ton frigo, il y a ${this.beer} bières et ${this.yaourt} yaourts`)
  }
}

frigo.siri()
