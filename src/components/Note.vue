<script setup>
import { computed } from 'vue';

const props = defineProps(['note'])

const percentage = computed(() => Math.ceil(props.note * 10))
</script>

<template>
  <div
    class="note-container"
    :class="{
      green: percentage >= 70,
      yellow: percentage >= 40 && percentage < 70,
      red: percentage < 40
    }"
  >
    <span>{{ percentage }}%</span>
  </div>
</template>

<style scoped lang="scss">
.note-container {
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
</style>
