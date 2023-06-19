<template>
  <div class="w-full bg-indigo-900 flex items-center justify-between px-6 py-4 shadow-lg">
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
  <div class="w-full">
    <options-menu v-if="!showMenu"/>
  </div>
</template>

<script setup lang="ts">
import {Bars3Icon} from "@heroicons/vue/24/solid";
import {XMarkIcon} from "@heroicons/vue/24/solid";
import {ref} from "vue";
import OptionsMenu from "@/components/defaultLayout/OptionsMenu.vue";

const showMenu = ref(true);
</script>

<style scoped>

</style>