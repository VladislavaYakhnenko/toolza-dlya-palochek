<template>
  <button class="bg-indigo-900 text-xl rounded-lg px-8 py-6 text-white hover:opacity-90 duration-200">
    {{ text }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  text?: string
}

const props = defineProps<Props>()

</script>

<style scoped>

</style>