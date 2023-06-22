<template>
  <div class="w-full relative sticky top-0 z-50">
    <div class="w-full bg-indigo-900 drop-shadow-xl flex items-center justify-between px-6 py-4 fixed top-0">
      <img
          class="w-10 h-10 rounded-full border-2 border-white"
          src="@/assets/dragons.jpg"
      />
      <Bars3Icon
          class="w-8 h-8 text-white cursor-pointer"
          v-if="showMenu"
          @click="showMenu = false"
      />
      <XMarkIcon
          class="w-8 h-8 text-white cursor-pointer"
          v-else
          @click="showMenu = true"
      />
    </div>
    <options-menu class="fixed top-[72px] w-full" v-if="!showMenu"/>
  </div>
</template>

<script setup lang="ts">
import {Bars3Icon} from "@heroicons/vue/24/solid";
import {XMarkIcon} from "@heroicons/vue/24/solid";
import OptionsMenu from "@/components/defaultLayout/OptionsMenu.vue";
import {ref} from "vue";

const showMenu = ref(true);
</script>

<style scoped>

</style>