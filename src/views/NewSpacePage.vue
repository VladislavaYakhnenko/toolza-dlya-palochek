<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-indigo-900">
    <h1 class="text-white font-mont text-2xl text-center">
      Тут ти можеш створити новий спейс:)
    </h1>
    <form class="bg-indigo-300 text-xl rounded-lg px-8 py-6 flex flex-col justify-center gap-4">
      <custom-input
          required
          v-model="spaceName"
          label="Введи назву:"
          placeholder="Назва"
      />
      <custom-input
          required
          v-model="spaceCode"
          label="Введи код:"
          placeholder="Код"
      />
      <secondary-button
          type="submit"
          text="Підтвердити"
          class="px-4 py-3"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import CustomInput from "@/components/ui/CustomInput.vue";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton.vue";
import {ref} from "vue";

const spaceName = ref('');
const spaceCode = ref('');
</script>

<style scoped>

</style>

<style scoped>

</style>