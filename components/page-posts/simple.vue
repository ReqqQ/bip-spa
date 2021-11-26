<template>
  <div class="bg-white ls-border-radius ls h-100">
    <PagePostsTitle :isBoxTitle="true" :boxTitle="boxTitle"/>
    <div class="p-3">
      <div v-for="post in posts" :key="post.ID" class="mb-4">
        <PagePostsTitle :isSimple="true" :postTitle="post.Title"/>
        <PagePostsStats :createdAt="post.CreatedAt"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  name: "Posts",
  props: {
    posts: Object,
    boxTitle: String
  }
}
</script>

<style scoped>
.rs-posts-radius {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
</style>