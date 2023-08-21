<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const logged = ref(false)
const toggle = () => (logged.value = !logged.value)
</script>

<template>
  <header>
    <div class="container">
      <div class="flex">
        <h1>
          <a href="/">
            Vue<span class="red">Flix</span>
          </a>
        </h1>
        <nav>
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/a-propos">A propos</RouterLink>
          <button @click="toggle" v-if="!logged">Connexion</button>
          <div v-else class="user-logged">
            Fiorella
            <img src="https://i.pravatar.cc/75?u=fiorella" alt="Fiorella" />
            <button @click="toggle">X</button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: $primary-color;
  padding: 16px 0;

  .flex {
    align-items: center;
    justify-content: space-between;
  }
}

h1 {
  font-size: 24px;

  a {
    color: #fff;
  }

  .red {
    color: #f87171;
  }
}

.user-logged {
  display: inline;
}
</style>
