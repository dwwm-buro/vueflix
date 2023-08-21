<script setup>
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <div class="container">
    <RouterView />
  </div>
  <Footer />
</template>
