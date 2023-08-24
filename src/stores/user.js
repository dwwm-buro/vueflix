import { defineStore } from 'pinia'
import { api } from '@/services/api'

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
    login(username, password) {
      return api('/login', { method: 'POST', body: { email: username, password } })
        .then((response) => {
          this.user = { username: response.user.name }
        })
        .catch((reason) => {
          throw reason.data
        })
    },
    logout() {
      this.user = null
    }
  }
})
