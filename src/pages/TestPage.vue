<template>
  <default-layout>
    <div>
      hello world
    </div>
    <button @click="testFoo">Get Menus</button>

    <pre v-for="space in spaces">
    {{ space.name }}
  </pre>
  </default-layout>

</template>

<script setup lang="ts">
import SpaceService from "@/services/SpaceService";
import {Space} from "@/types/Space";
import {ref} from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

const spaceService = new SpaceService();

const spaces = ref([] as Space[]);

const testFoo = async () => {
  const res = await spaceService.getAllSpaces();
  spaces.value = res;
  console.log(spaces.value);
}

</script>

<style lang="scss" scoped>

</style>
