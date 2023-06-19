<template>
  <div class="w-full min-h-screen flex flex-col items-center justify-center gap-8 bg-indigo-900">
    <h1 class="text-white font-mont text-2xl text-center">
      Зроби найважливіший вибір у житті!
    </h1>
    <div class="flex gap-8 max-mobile:flex-col">
      <router-link :to="CREATE_NEW_SPACE">
        <primary-button text="Створити новий спейс 🌌" />
      </router-link>
      <router-link :to="JOIN_SPACE">
        <primary-button text="Доєднатися до існуючого 👽"/>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import {CREATE_NEW_SPACE, JOIN_SPACE} from "@/utils/routes_utils";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton.vue";
</script>

<style scoped>

</style>