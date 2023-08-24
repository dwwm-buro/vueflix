<script setup>
// import { ref } from 'vue';
import Button from './Button.vue'

const props = defineProps(['user', 'open'])
const emit = defineEmits(['opened'])

// const open = ref(false)
const toggleBiography = () => {
  // open.value = !open.value
  emit('opened', props.user)
}
</script>

<template>
  <div class="card">
    <div>
      <img :src="user.avatar" :alt="user.name" />
      <h2>{{ user.name }}</h2>
    </div>
    <div>
      <p class="job">{{ user.job }}</p>
      <Button @click="toggleBiography" v-if="!open">Voir biographie</Button>
      <p v-if="open">{{ user.biography }}</p>
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
