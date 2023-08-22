<script setup>
import { ref } from 'vue'
import { countMovies } from '../api'

const year = new Date().getFullYear()
const movieCount = ref(0)
countMovies().then((length) => (movieCount.value = length))
</script>

<template>
  <footer class="container">
    <p>
      Copyright &copy; {{ year }}.
      <span v-if="movieCount > 0">
        Catalogue de <strong>{{ movieCount }}</strong> films.
      </span>
    </p>
  </footer>
</template>

<style scoped lang="scss">
footer {
  text-align: center;
  margin-top: 40px;
  border-top: 1px solid #d1d5db;
  padding: 48px 0;
}
</style>
