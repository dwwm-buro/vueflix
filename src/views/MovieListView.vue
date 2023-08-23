<script setup>
import { ref } from 'vue'
import { getMovies } from '../api'
import MovieCard from '../components/MovieCard.vue'
import Loader from '../components/Loader.vue'

const movies = ref([])
const loading = ref(true)
getMovies().then((response) => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 1500)
})
</script>

<template>
  <h1 class="title">Films</h1>

  <div class="flex" v-if="!loading">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>

  <div v-else>
    <Loader message="On charge les films" />
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
