<template>
  <button>
    <slot />
  </button>
</template>

<style scoped lang="scss">
$color: #b91c1c;

button {
  background-color: $color;
  border: 0;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 15px;
  color: #fff;
  transition: 0.2s;

  &:hover {
    background-color: darken($color, 10);
  }

  &:disabled {
    opacity: 0.5;
  }
}
</style>
