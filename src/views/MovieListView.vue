<script setup>
import { ref } from 'vue'
import { getMovies } from '@/services/api'
import Button from '@/components/Button.vue'
import Loader from '@/components/Loader.vue'
import MovieCard from '@/components/MovieCard.vue'
import { useCartStore } from '@/stores/cart'

const page = ref(1)
const movies = ref([])
const loading = ref(true)
getMovies().then((response) => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 1500)
})

const loadMore = () => {
  loading.value = true

  getMovies(++page.value).then((response) => {
    setTimeout(() => {
      movies.value = [...movies.value, ...response] // Fusion des tableaux
      loading.value = false
    }, 1500)
  })
}

const store = useCartStore()
</script>

<template>
  <div class="container">
    <h1 class="title">Films</h1>

    <ul class="flex">
      <li v-for="item in store.cart">
        <img width="50" :src="item.movie.poster_path" :alt="item.movie.title" />
      </li>
    </ul>

    <div v-if="!loading || movies.length > 0">
      <div class="flex">
        <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>

      <div class="button-container">
        <Button @click="loadMore" v-if="!loading && page < 4">Voir plus</Button>
        <Loader v-if="loading" message="Des films en plus" />
      </div>
    </div>

    <div v-else>
      <Loader message="On charge les films" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.button-container {
  text-align: center;

  button {
    font-size: 22px;
    padding: 10px 30px;
    margin-top: 20px;
  }
}

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
