<script setup>
const year = new Date().getFullYear()
const movieCount = 24686
</script>

<template>
  <footer class="container">
    <p>
      Copyright &copy; {{ year }}. Catalogue de <strong>{{ movieCount }}</strong> films.
    </p>
  </footer>
</template>
