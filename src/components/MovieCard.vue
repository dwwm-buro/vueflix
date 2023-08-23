<script setup>
defineProps(['movie'])
import { dayjs } from '../api'

const note = (note) => Math.ceil(note * 10)
</script>

<template>
  <div class="card">
    <div class="content">
      <div class="image-container">
        <RouterLink :to="`/films/`">
          <img :src="movie.poster_path" :alt="movie.title" />
        </RouterLink>
        <div
          class="note-container"
          :class="{
            green: note(movie.vote_average) >= 70,
            yellow: note(movie.vote_average) >= 40 && note(movie.vote_average) < 70,
            red: note(movie.vote_average) < 40
          }"
        >
          <span>{{ note(movie.vote_average) }}%</span>
        </div>
      </div>
      <div class="card-content">
        <h2>
          <RouterLink :to="`/films/`">{{ movie.title }}</RouterLink>
        </h2>
        <p class="movie-date">{{ dayjs(movie.release_date).format('DD MMMM YYYY') }}</p>
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
        background-color: #000;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 2px solid #000;

        &.green {
          border-color: #22c55e;
        }

        &.yellow {
          border-color: #eab308;
        }

        &.red {
          border-color: #ef4444;
        }

        span {
          color: #fff;
          font-weight: 700;
          display: flex;
          align-items: center;
          height: 100%;
          justify-content: center;
        }
      }
    }

    img {
      height: 350px;
      width: 100%;
      object-fit: cover;
      border-radius: 10px 10px 0 0;
      display: block;
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
