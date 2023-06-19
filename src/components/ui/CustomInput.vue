<template>
  <div class="flex flex-col gap-2">
    <label class="text-indigo-900 text-xl">
      {{ label }}
    </label>
    <input
        :placeholder="placeholder"
        v-model="data"
        class="rounded-lg focus-visible:outline-0 focus-visible:pl-3 duration-200 px-2 py-1 text-lg text-indigo-900 placeholder:text-gray-400"
    />
  </div>
</template>

<script setup lang="ts">

import {useVModel} from "@vueuse/core";

interface Props {
  label?: string,
  placeholder?: string,
  modelValue: string,
}

const props = defineProps<Props>();

const emit = defineEmits(['update:modelValue']);

const data = useVModel(props, 'modelValue', emit);
</script>

<style scoped>

</style>