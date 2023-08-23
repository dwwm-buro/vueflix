import { $fetch } from 'ohmyfetch'

const url = 'http://localhost:3000'

export const countMovies = () => {
  return getMovies().then((response) => response.length)
}

export const getMovies = (page = 1) => {
  return $fetch(`${url}/movies?_page=${page}&_limit=10`)
}
