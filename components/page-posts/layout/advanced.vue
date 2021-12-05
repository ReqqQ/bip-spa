<template>
  <div class="col-12 col-xl-6 d-flex flex-column justify-content-between">
    <div v-for="(post,postIndex) in posts[postsCategory]" :key="post.ID" class="callout callout-danger" :class="postIndex < posts[postsCategory].length - 1 ? 'mb-2':''" >
      <PagePostsSectorHeader :postTitle="post.Title" :postDescription="post.Title"/>
      <PagePostsSectorStats :createdAt="post.CreatedAt" :isReadMore="true"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "advanced",
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
    }
  },
}
</script>

<style scoped>
.callout {
  padding: 20px 20px 10px 20px;
  border: 0px solid #d6e0ec;
  border-left-width: 5px;
  border-radius: 3px 24px 24px 3px;
  background-color: #e6f5ff;
}

.callout-danger {
  border-left-color: #d9534f;
}
</style>