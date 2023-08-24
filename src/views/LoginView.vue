<script setup>
import { ref } from 'vue'
import Button from '@/components/Button.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const userStore = useUserStore()
const router = useRouter()
const user = ref({ email: '', password: '' })
const errors = ref()

const login = () => {
  userStore
    .login(user.value.email, user.value.password)
    .then(() => router.push('/films'))
    .catch((e) => (errors.value = e))
}
</script>

<template>
  <div class="container">
    <h1 class="title">Connexion</h1>

    {{ errors }}

    <form @submit.prevent="login">
      <div>
        <label for="email">Email</label>
        <input type="text" v-model="user.email" />
      </div>

      <div>
        <label for="password">Mot de passe</label>
        <input type="password" v-model="user.password" />
      </div>

      <Button>Connexion</Button>
    </form>
  </div>
</template>
