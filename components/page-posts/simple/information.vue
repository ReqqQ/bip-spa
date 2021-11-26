<template>
  <div class="mt-2 d-flex justify-content-evenly align-items-end">
    <small class="text-muted ">  <i class="bi bi-person"></i>  Admin </small>
    <small class="text-muted ">  <i class="bi bi-eye"></i> {{Math.floor(Math.random() * 10) + 1}} </small>
    <small class="text-muted ">  <i class="bi bi-clock"></i>   {{createdAt}} </small>
  </div>
</template>

<script>
export default {
  name: "information",
  props:{
    createdAt: String
  }
}
</script>

<style scoped>

</style>