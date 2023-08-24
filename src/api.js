import { $fetch } from 'ohmyfetch'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
dayjs.locale('fr')

const api = $fetch.create({ baseURL: 'http://localhost:3000' })

export const countMovies = () => {
  return getMovies().then((response) => response.length)
}

export const getMovies = (page = 1) => {
  return api(`/movies?_page=${page}&_limit=10`)
}

export const getMovie = (id) => {
  return api(`/movies/${id}?_expand=genre&_expand=actors`)
}

export const getComments = (id) => {
  return api(`/movies/${id}/comments?_expand=user`)
}

export { dayjs }
