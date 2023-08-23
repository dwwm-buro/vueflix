<script setup>
import { useRoute } from 'vue-router'
import { getMovie } from '../api'
import { computed, ref } from 'vue'
import { dayjs } from '../api'
import Note from '../components/Note.vue'

const route = useRoute()
const movie = ref({})
getMovie(route.params.id).then(response => {
  movie.value = response
})

const year = computed(() => new Date(movie.value.release_date).getFullYear())
const duration = computed(() => {
  const hours = Math.floor(movie.value.runtime / 60)
  const minutes = movie.value.runtime % 60

  return `${hours}h${minutes < 10 ? 0 : ''}${minutes}`
})
const color = ref([0, 0, 0])
</script>

<template>
  <div class="movie-show" :style="{ backgroundImage: `url(${movie.backdrop_path})` }">
    <div class="movie-background" :style="{ backgroundColor: `rgba(${color}, 0.75)` }">
      <div class="container">
        <div class="flex movie-background-content">
          <img
            :src="movie.poster_path"
            :alt="movie.title"
            class="movie-poster"
          />
          <div class="movie-content flex">
            <h1>
              {{ movie.title }}
              <span>({{ year }})</span>
            </h1>
            <p class="movie-content-duration">
              {{ dayjs(movie.release_date).format('DD MMMM YYYY') }} - {{ movie.genre?.name }} -
              {{ duration }}
            </p>
            <div class="flex movie-content-note">
              <Note :note="movie.vote_average" />
              <button class="flex movie-video items-center gap-3" @click="showModal = true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="movie-play-icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z"
                  />
                </svg>

                <span>Voir la bande annonce</span>
              </button>
            </div>
            <div>
              <p class="movie-tagline">{{ movie.tagline }}</p>
              <h3 class="movie-synopsis-title">Synopsis</h3>
              <p>{{ movie.overview }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.movie-show {
  background-position: center;
  background-size: cover;
}

.movie-background {
  padding: 40px 0;
  color: #fff;

  .movie-background-content {
    gap: 40px;

    @media (max-width: 767px) {
      display: block;
    }
  }

  .movie-content {
    flex-direction: column;
    justify-content: center;

    h1 {
      span {
        font-weight: 300;
      }
    }
  }

  .movie-content-duration {
    margin-bottom: 20px;
  }

  .movie-content-note {
    margin-bottom: 20px;
    gap: 20px;
  }

  .movie-video {
    align-items: center;
    gap: 10px;
    background-color: transparent;
    color: #fff;
    border: 0;
    cursor: pointer;
  }

  .movie-play-icon {
    width: 48px;
    height: 48px;
  }

  .movie-tagline {
    font-style: italic;
  }

  .movie-synopsis-title {
    font-weight: 700;
    margin: 15px 0;
  }
}

.movie-poster {
  border-radius: 10px;
  height: 400px;
  object-fit: cover;
  margin: auto;

  @media (max-width: 767px) {
    margin-bottom: 40px;
  }
}
</style>
