<script setup>
import { useRoute } from 'vue-router'
import { getMovie } from '../api'
import { ref } from 'vue'
const route = useRoute()
const movie = ref({})
getMovie(route.params.id).then(response => {
  movie.value = response
})
</script>

<template>
</template>

<style scoped lang="scss">
</style>
