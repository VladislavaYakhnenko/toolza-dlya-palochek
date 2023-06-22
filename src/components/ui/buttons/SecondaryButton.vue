<template>
  <button class="w-full bg-indigo-900 text-xl rounded-lg text-white hover:opacity-90 duration-200">
    {{ text }}
    <slot/>
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

const props = defineProps<Props>();
</script>

<style scoped>

</style>