<template>
  <div class="w-full h-full px-24 py-10 max-mobile:px-10 max-mobile:py-6 relative min-h-[90vh]">
    <div class="w-full flex flex-col gap-4">
      <wish-card/>
      <wish-card/>
      <wish-card/>
      <wish-card/>
      <wish-card/>
    </div>
    <secondary-button class="absolute bottom-3 right-3 max-w-fit px-1 py-1">
      <plus-icon class="h-8 w-8 text-white"/>
    </secondary-button>
  </div>
</template>

<script setup lang="ts">
import WishCard from "@/components/wishlist/WishCard.vue";
import SecondaryButton from "@/components/ui/buttons/SecondaryButton.vue";
import {PlusIcon} from "@heroicons/vue/20/solid";
</script>

<style scoped>

</style>