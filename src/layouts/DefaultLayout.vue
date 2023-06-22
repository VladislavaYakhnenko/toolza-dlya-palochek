<template>
  <div class="w-full min-h-screen flex flex-col relative">
    <header-default/>
    <div class="mt-[72px]">
      <slot/>
    </div>
<!--    <footer-default/>-->
  </div>
</template>

<script setup lang="ts">
import HeaderDefault from "@/components/defaultLayout/HeaderDefault.vue";

</script>

<style scoped>

</style>