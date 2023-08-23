import { $fetch } from 'ohmyfetch'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
dayjs.locale('fr')

const url = 'http://localhost:3000'

export const countMovies = () => {
  return getMovies().then((response) => response.length)
}

export const getMovies = (page = 1) => {
  return $fetch(`${url}/movies?_page=${page}&_limit=10`)
}

export { dayjs };
