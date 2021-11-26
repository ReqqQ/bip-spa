<template>
  <div :class=images.componentClass>
    <img v-for="(image,imageId) in images.images"
         :key="imageId"
         :width="image.width"
         :src=image.src
         class="img-fluid"
         :alt="image.alt">
  </div>
</template>

<script lang="ts">
export default {
  name: "index",
  props: {
    images: Object
  },
  methods:{
    getImageFromUrl(imageUrl:string){
      return image
    }
  }
}
</script>
