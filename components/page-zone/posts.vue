<template>
  <component
      :posts="posts"
      :postsCategory="postsCategory"
      :boxTitle="boxTitle"
      :is="postsLayout"
  />
</template>

<script lang="ts">
export default {
  name: "pagePosts",
  props: {
    posts: Object,
    postsLayout: {
      type: String,
      default: null
    },
    boxTitle: {
      type: String,
      default: null
    },
    postsCategory: {
      type: String,
      default: null
    },
  },
}
</script>