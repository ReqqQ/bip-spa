<template>
  <div :class="images.componentClass">
    <div v-for="(image,imageId) in images.images"
         :key="imageId" >
      <img
          :width="image.width"
          :src=image.src
          :alt="image.alt" class="image img-fluid">
      <span v-if="images.hasDescriptions" class="d-flex flex-column">
          <span class="text-center">User Name</span>
          <span class="text-center">Stanowisko</span>
    </span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "index",
  props: {
    images: Object
  }
}
</script>
<style scoped>

.employee-img img {
  width: 11em;
  height: 11em;
}
.image{
  max-width: 100%;
}
</style>
