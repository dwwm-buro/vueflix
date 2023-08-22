<script setup>
import { ref } from 'vue'
import { getMovies } from '../api'
import MovieCard from '../components/MovieCard.vue'

const movies = ref([])
getMovies().then((response) => (movies.value = response))
</script>

<template>
  <h1 class="title">Films</h1>

  <div class="flex">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped lang="scss">
.flex {
  flex-wrap: wrap;
  margin: 0 -10px;

  .card {
    width: 20%;
  }

  @media (max-width: 1023px) {
    .card {
      width: 25%;
    }
  }

  @media (max-width: 767px) {
    .card {
      width: 50%;
    }
  }

  @media (max-width: 639px) {
    .card {
      width: 100%;
    }
  }
}
</style>
