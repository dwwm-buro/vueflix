import { ref } from 'vue'
import { api } from './api'

export const useFetch = (url) => {
  const data = ref(null)
  const errors = ref(null)
  const loading = ref(false)

  const loadData = () => {
    loading.value = true

    api(url)
      .then(response => data.value = response)
      .catch(reason => errors.value = reason)
      .finally(() => loading.value = false)
  }

  loadData()

  return { data, loading, loadData, errors }
}
