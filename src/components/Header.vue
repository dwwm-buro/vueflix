<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const logged = ref(false)
const toggle = () => (logged.value = !logged.value)
</script>

<template>
  <header>
    <div class="container">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/a-propos">A propos</RouterLink>
        <button @click="toggle" v-if="!logged">Connexion</button>
        <div v-else class="user-logged">
          Fiorella
          <img src="https://i.pravatar.cc/75?u=fiorella" alt="Fiorella" />
          <button @click="toggle">X</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: $primary-color;
}

.user-logged {
  display: inline;
}
</style>
