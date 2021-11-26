<template>
  <span v-if="isSimple"><i class="bi bi-caret-right-fill text-danger"></i>{{ transformTitle(postTitle, 45) }}</span>
  <p v-if="isExpand" class="h5"> {{ transformTitle(postTitle, 60) }}</p>
  <div v-if="isBoxTitle || isDescription" class="bg-danger rs-posts-radius d-flex justify-content-center text-white py-2">
    {{ boxTitle }}
  </div>
</template>

<script lang="ts">
export default {
  name: "title",
  props: {
    postTitle: String,
    boxTitle: String,
    isSimple: {
      type: Boolean,
      default: false
    },
    isBoxTitle: {
      type: Boolean,
      default: false
    },
    isExpand: {
      type: Boolean,
      default: false
    },
    isDescription: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    transformTitle(postTitle: string, sliceLength: number) {
      let slicedPostTile = postTitle.slice(0, sliceLength)
      return slicedPostTile.charAt(0).toUpperCase() + slicedPostTile.slice(1) + '...'
    }
  }
}
</script>

<style scoped>

</style>