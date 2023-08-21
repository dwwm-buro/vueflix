<script setup>
defineProps(['user'])

import Button from '../components/Button.vue'
</script>

<template>
  <div class="card">
    <div>
      <img :src="user.avatar" :alt="user.name" />
      <h2>{{ user.name }}</h2>
    </div>
    <div>
      <p class="job">{{ user.job }}</p>
      <Button>Voir biographie</Button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  background-color: #fff;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0 1px 3px 0 #0000001a;
  display: flex;
  align-items: center;

  div {
    width: 50%;
    text-align: center;

    img {
      border-radius: 50%;
      max-width: 128px;
    }

    h2 {
      font-size: 20px;
      margin-top: 5px;
    }

    .job {
      font-weight: 700;
      margin-bottom: 15px;
    }
  }
}
</style>
