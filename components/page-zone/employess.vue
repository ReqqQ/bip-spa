<template>
  <div class="bg-white ls-border-radius ls h-100">
    <div class="d-flex flex-column col-4" v-for="x in 3">
      <Image :images="logoImage" />
      <span>User Name</span>
      <span>Stanowisko</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "employess"
}
</script>

<style scoped>

</style>