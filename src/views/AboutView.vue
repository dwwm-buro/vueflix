<script setup>
import { ref } from 'vue'
import Card from '@/components/Card.vue'

const team = ref([
  {
    id: 1,
    name: 'Fiorella',
    job: 'Manager',
    avatar: 'https://i.pravatar.cc/150?u=fiorella@boxydev.com',
    biography:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia voluptatum sunt placeat aliquam iusto exercitationem at? Vel itaque porro quis saepe quod soluta alias facere eum deleniti? Rem, eveniet.'
  },
  {
    id: 2,
    name: 'Matthieu',
    job: 'Développeur',
    avatar: 'https://i.pravatar.cc/150?u=matthieu@boxydev.com',
    biography:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia voluptatum sunt placeat aliquam iusto exercitationem at? Vel itaque porro quis saepe quod soluta alias facere eum deleniti? Rem, eveniet.'
  },
  {
    id: 3,
    name: 'Marina',
    job: 'Commerciale',
    avatar: 'https://i.pravatar.cc/150?u=marina@boxydev.com',
    biography:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam mollitia voluptatum sunt placeat aliquam iusto exercitationem at? Vel itaque porro quis saepe quod soluta alias facere eum deleniti? Rem, eveniet.'
  }
])
const selected = ref(null)
</script>

<template>
  <div class="container">
    <h1 class="title">A propos</h1>

    <div class="flex">
      <!-- Le $event représente le props.user envoyé
      par le emit dans le composant Card -->
      <Card
        v-for="user in team"
        :key="user.id"
        :user="user"
        @opened="selected = $event.id"
        :open="selected === user.id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$desktopNumber: 3;
$tabletNumber: 2;

.flex {
  gap: 30px;
  flex-wrap: wrap;

  .card {
    width: calc(100% / $desktopNumber - (30px * ($desktopNumber - 1) / $desktopNumber));
  }

  @media (max-width: 1023px) {
    .card {
      width: calc(100% / $tabletNumber - (30px * ($tabletNumber - 1) / $tabletNumber));
    }
  }

  @media (max-width: 639px) {
    .card {
      width: 100%;
    }
  }
}
</style>
