<template>
  <div class="w-full flex items-center gap-2">
    <article class="w-full bg-indigo-900 px-4 py-3 gap-6 rounded-lg flex flex-col max-mobile:pr-2">
      <div class="w-full flex justify-between items-center">
        <div class="flex gap-3 items-center">
          <custom-checkbox/>
          <h1 class="text-white font-mont text-xl max-mobile:text-lg">
            Назва бажання
          </h1>
        </div>
        <div class="flex gap-3 items-center max-mobile:gap-1">
          <img
              class="w-10 h-10 rounded-full border-2 border-white"
              src="@/assets/dragons.jpg"
          />
          <chevron-down-icon
              v-if="!showFullInfo"
              @click="showFullInfo = true"
              class="w-8 h-8 text-white cursor-pointer"
          />
          <chevron-up-icon
              v-else
              @click="showFullInfo = false"
              class="w-8 h-8 text-white cursor-pointer"
          />
        </div>
      </div>
      <div
          class="w-full flex justify-between items-end gap-10 max-mobile:flex-col"
          v-if="showFullInfo"
      >
        <p class="text-white font-mont text-base">
          Текст найкращого в світі супер мега бажання
          Текст найкращого в світі супер мега бажання
          Текст найкращого в світі супер мега бажання
          Текст найкращого в світі супер мега бажання
        </p>
        <span class="text-gray-100 font-mont text-sm whitespace-nowrap">
        15 січня 2023
      </span>
      </div>
    </article>
    <change-card-panel/>
  </div>
</template>

<script setup lang="ts">
import CustomCheckbox from "@/components/ui/CustomCheckbox.vue";
import {ChevronDownIcon} from "@heroicons/vue/20/solid";
import {ChevronUpIcon} from "@heroicons/vue/20/solid";
import {ref} from "vue";
import ChangeCardPanel from "@/components/wishlist/ChangeCardPanel.vue";

const showFullInfo = ref(false);
</script>

<style scoped>

</style>