import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({ user: null }),
  getters: {
    logged: (state) => state.user,
    avatar() {
      return `https://i.pravatar.cc/40?u=${this.user?.username}`
    }
  },
  actions: {
    fakeLogin(username) {
      this.user = { username }
    },
    logout() {
      this.user = null
    }
  }
})
