import { $fetch } from 'ohmyfetch'
import { ref } from 'vue'

export const useFetch = (url) => {
  const api = $fetch.create({ baseURL: 'http://localhost:3000' })
  const data = ref(null)
  const loading = ref(false)

  const loadData = () => {
    loading.value = true

    api(url)
      .then(response => data.value = response)
      .catch(reason => error.value = reason)
      .finally(() => loading.value = false)
  }

  loadData()

  return { data, loading, loadData }
}
