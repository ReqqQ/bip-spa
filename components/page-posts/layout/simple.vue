<template>
  <div class="col-xxl-6 col-xl-12 col-12 col-sm-6 mt-3 mt-lg-0">
    <div class="simple-posts-title  ls-border-radius h-100">
      <PagePostsSectorHeader :boxTitle="boxTitle"/>
      <div v-if="posts[postsCategory]" v-for="post in posts[postsCategory].slice(0,4)" :key="post.ID" class="px-3 py-2">
        <PagePostsSectorHeader :isSimple="true" :postTitle="post.title"/>
        <PagePostsSectorStats :createdAt="post.created_at" :isReadMore="false"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "simple",
  props: {
    posts: Object,
    boxTitle: {
      type: String,
      default: null
    },
    postsCategory: {
      type: String,
      default: null
    }
  }
}
</script>

<style scoped>
.simple-posts-title{
  background: #ffe8e8;
  box-shadow: inset 0 20px 20px 6px #0000000f;
}
</style>