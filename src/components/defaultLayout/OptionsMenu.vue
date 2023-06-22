<template>
  <div class="h-[100vh] w-[100vw] bg-black bg-opacity-40 px-3 py-2">
    <div class="w-full flex flex-col items-center gap-6 px-8 py-6 bg-indigo-900 font-mont text-base text-white duration-200 rounded-lg">
      <router-link
          class="hover:opacity-50"
          to="#"
      >
        Списочок бажань ⭐️
      </router-link>
      <router-link
          class="hover:opacity-50"
          to="#"
      >
        Домашня менюшка 🔪
      </router-link>
      <router-link
          to="#"
          class="hover:opacity-50"
      >
        Фільмец на вечір 🎬
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "OptionsMenu"
}
</script>

<style scoped>

</style>