<script setup>
import { useRoute } from 'vue-router'
import { getMovie } from '../api'
import { ref } from 'vue'
const route = useRoute()
const movie = ref({})
getMovie(route.params.id).then(response => {
  movie.value = response
})
const color = ref([0, 0, 0])
</script>

<template>
  <div class="movie-show" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
    <div class="movie-background" :style="{ backgroundColor: `rgba(${color}, 0.75)` }">
      <div class="container">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-show {
  background-position: center;
  background-size: cover;
}

</style>
