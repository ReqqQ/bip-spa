<template>
  <div v-if="isSimplePost">
    <PagePostsHeader :isSimple="isSimplePost" :postTitle="post.Title"/>
    <PagePostsStats :createdAt="post.CreatedAt"/>
  </div>

  <div v-else class="callout callout-danger mb-2">
    <PagePostsHeader :postTitle="post.Title" :postDescription="post.Title"/>
    <PagePostsStats :createdAt="post.CreatedAt" :isReadMore="!isSimplePost"/>
  </div>
</template>

<script>
export default {
  name: "PagePosts",
  props: {
    post: Object,
    isSimplePost: {
      type: Boolean,
      default: false
    },
    boxTitle: {
      type: String,
      default: null
    },
  }
}
</script>

<style scoped>
.callout {
  padding: 20px;
  /*margin: 20px 0;*/
  border: 0px solid #d6e0ec;
  border-left-width: 5px;
  border-radius: 3px 24px 24px 3px;
  background-color: #e6f5ff;
  box-shadow: inset -5px 0 10px 0 #f8fbff;
}

.callout-danger {
  border-left-color: #d9534f;
}
</style>