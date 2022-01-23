<template>
  <component
      :posts="posts"
      :postsCategory="postsCategory"
      :boxTitle="boxTitle"
      :color ="color"
      :background="background"
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
      color: {
          type: String,
          default: ""
      },
      background: {
          type: String,
          default: ""
      }
  },
}
</script>