<template>
  <div class="w-full min-h-screen flex flex-col relative">
    <header-default class="sticky z-50"/>
    <slot/>
    <footer-default/>
  </div>
</template>

<script>
import HeaderDefault from "@/components/defaultLayout/HeaderDefault.vue";
import FooterDefault from "@/components/defaultLayout/FooterDefault.vue";

export default {
  name: "DefaultLayout",
  components: {FooterDefault, HeaderDefault}
}
</script>

<style scoped>

</style>