<script setup>
defineProps(['movie'])
import { dayjs } from '@/services/api'
import slugify from 'slugify'
import Button from './Button.vue'
import Note from './Note.vue'
import { useCartStore } from '@/stores/cart'

const slug = (title) => slugify(title, { lower: true })
const store = useCartStore()
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="image-container">
        <RouterLink :to="`/films/${movie.id}-${slug(movie.title)}`">
          <img :src="movie.poster_path" :alt="movie.title" />
        </RouterLink>
        <Note :note="movie.vote_average" />
      </div>
      <div class="card-content">
        <h2>
          <RouterLink :to="{ name: 'movie', params: { id: movie.id, slug: slug(movie.title) } }">
            {{ movie.title }}
          </RouterLink>
        </h2>
        <p class="movie-date">{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
        <Button @click="store.add(movie)" v-if="!store.has(movie)">Ajouter au panier</Button>
        <Button @click="store.delete(movie)" v-if="store.has(movie)">Retirer du panier</Button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  margin-bottom: 20px;

  .content {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 3px 0 #0000001a;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    height: 100%;

    .image-container {
      position: relative;

      .note-container {
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
    }

    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
    }

    .card-content {
      padding: 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      h2 {
        font-size: 16px;

        a {
          color: #000;
        }
      }

      .movie-date {
        color: #9ca3af;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
