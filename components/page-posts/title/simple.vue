<template>
  <div class="bg-danger rs-posts-radius d-flex justify-content-center text-white py-2">
    {{ boxTitle }}
  </div>
</template>

<script>
export default {
  name: "box",
  props:{
    boxTitle: String
  }
}
</script>

<style scoped>

</style>