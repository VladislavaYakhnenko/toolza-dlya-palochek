<template>
  <div class="flex items-center justify-center">
    <div class="inline-block text-indigo-900 h-20 w-20 animate-spin rounded-full border-8 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]">
      <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
        Loading...
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoaderSpinner"
}
</script>

<style scoped>

</style>