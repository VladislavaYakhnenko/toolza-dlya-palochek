<template>
  <button class="w-full bg-indigo-300 text-xl rounded-lg px-8 py-6 text-indigo-900 hover:opacity-70 duration-200">
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