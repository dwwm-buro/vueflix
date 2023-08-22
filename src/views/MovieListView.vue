<script setup>
import { ref } from 'vue'
import { getMovies } from '../api'

const movies = ref([])
getMovies().then((response) => (movies.value = response))
</script>

<template>
  <div class="flex">
    <div v-for="movie in movies" :key="movie.id">
      {{ movie }}
    </div>
  </div>
</template>
