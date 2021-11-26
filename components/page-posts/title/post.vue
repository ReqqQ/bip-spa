<template>
  <div>
    <span><i class="bi bi-caret-right-fill text-danger"></i>{{ transformTitle(postTitle) }}</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "title",
  props:{
    postTitle: String
  },
  methods: {
    transformTitle(postTitle: string) {
      let slicedPostTile = postTitle.slice(0, 45)
      return slicedPostTile.charAt(0).toUpperCase() + slicedPostTile.slice(1) + '...'
    }
  }
}
</script>

<style scoped>

</style>