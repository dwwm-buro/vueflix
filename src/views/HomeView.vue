<script setup>
import { $fetch } from 'ohmyfetch'
import { onBeforeMount, ref } from 'vue'

const movies = ref([])
const loading = ref(true)
// Mode asynchrone
$fetch('https://api.vueflix.boxydev.com/movies').then((response) => {
  setTimeout(() => {
    movies.value = response
    loading.value = false
  }, 500)
})

// Mode synchrone
const genres = ref([])
onBeforeMount(async () => {
  genres.value = await $fetch('https://api.vueflix.boxydev.com/genres')
})
</script>

<template>
  <h1 class="title">Accueil</h1>
  <p v-if="loading">Chargement en cours...</p>
  {{ movies }}
  {{ genres }}
</template>
