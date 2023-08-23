<script setup>
import { onBeforeUnmount, ref } from 'vue'

defineProps(['message'])

const dots = ref('')
let timeout

const loadDots = () => {
  if (dots.value === '...') {
    dots.value = ''
  } else {
    dots.value += '.'
  }

  timeout = setTimeout(() => loadDots(), 200)
}

// Quand le loader disparait, on supprime le settimeout
onBeforeUnmount(() => clearTimeout(timeout))

loadDots()
</script>

<template>
  <div>
    <svg
      width="38"
      height="38"
      viewBox="0 0 38 38"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#f87171"
    >
      <g fill="none" fill-rule="evenodd">
        <g transform="translate(1 1)" stroke-width="2">
          <circle stroke-opacity=".5" cx="18" cy="18" r="18" />
          <path d="M36 18c0-9.94-8.06-18-18-18">
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 18 18"
              to="360 18 18"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </g>
      </g>
    </svg>
    <h2>{{ message + dots }}</h2>
  </div>
</template>

<style scoped lang="scss">
div {
  text-align: center;
  padding: 48px 0;
}
</style>
