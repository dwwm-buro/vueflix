<script setup>
defineProps(['user'])

import Button from '../components/Button.vue'

const isOpen = true;
</script>

<template>
  <div class="card">
    <img :src="user.avatar" :alt="user.name" />
    <h2>{{ user.name }}</h2>
    <p>{{ user.job }}</p>
    <Button>Voir biographie</Button>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 #0000001a;
}
</style>
