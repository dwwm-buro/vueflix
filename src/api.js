import { $fetch } from 'ohmyfetch'

const url = 'http://localhost:3000'

export const countMovies = () => {
  return getMovies().then((response) => response.length)
}

export const getMovies = () => {
  return $fetch(`${url}/movies`)
}
