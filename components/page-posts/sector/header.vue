<template>
  <span v-if="isSimplePost()"><i class="bi bi-caret-right-fill text-danger"></i>{{ transformTitle(postTitle, 45) }}</span>
  <p v-if="isExpandPost()" class="h5"> {{ transformTitle(postTitle, 60) }}</p>
  <div v-if="boxTitle" class="bg-danger rs-posts-radius d-flex justify-content-center text-white py-2">
    {{ boxTitle }}
  </div>
  <div v-if="postDescription">
    <small class="text-muted">{{ transformTitle(postDescription, 210) }}</small>
  </div>
</template>

<script lang="ts">
export default {
  name: "post-title",
  props: {
    postTitle: {
      type: String,
      default: null
    },
    postDescription: String,
    boxTitle: String,
    isSimple: {
      type: Boolean,
      default: false
    },
    isDescription: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isSimplePost():boolean{
      return this.isSimple && this.postTitle
    },
    isExpandPost():boolean{
      return !this.isSimple && this.postTitle
    },
    transformTitle(postTitle: string, sliceLength: number) {
      let slicedPostTile = postTitle.slice(0, sliceLength)
      return slicedPostTile.charAt(0).toUpperCase() + slicedPostTile.slice(1) + '...'
    }
  }
}
</script>

<style scoped>
.rs-posts-radius {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
</style>