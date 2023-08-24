<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from './Button.vue'
import { useUserStore } from '@/stores/user'

// const logged = ref(false)
// const toggle = () => (logged.value = !logged.value)

const userStore = useUserStore()
</script>

<template>
  <header>
    <div class="container">
      <div class="flex">
        <h1>
          <RouterLink to="/">Vue<span class="red">Flix</span></RouterLink>
        </h1>
        <nav class="flex">
          <RouterLink to="/">Accueil</RouterLink>
          <RouterLink to="/films">Films</RouterLink>
          <RouterLink to="/a-propos">A propos</RouterLink>
          <Button
            @click="userStore.login('Fiorella')"
            v-if="!userStore.logged"
            class="user-not-logged"
            >Connexion</Button
          >
          <div v-else class="user-logged">
            <strong>{{ userStore.user?.username }}</strong>
            <img :src="userStore.avatar" :alt="userStore.user?.username" />
            <Button @click="userStore.logout">X</Button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
header {
  background-color: $secondary-color;
  padding: 16px 0;

  .flex {
    align-items: center;
    justify-content: space-between;
  }

  nav {
    color: #fff;
    align-items: center;

    a {
      color: #fff;
      padding: 0 8px;
    }
  }
}

h1 {
  font-size: 24px;

  a {
    color: #fff;
  }

  .red {
    color: $primary-color;
  }
}

.user-logged {
  display: inline-flex;
  align-items: center;
  margin-left: 24px;
  gap: 10px;

  img {
    border-radius: 50%;
  }
}

.user-not-logged {
  margin-left: 40px;
}
</style>
