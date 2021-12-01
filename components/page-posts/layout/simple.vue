<template>
  <div class="col-sm-6 col-12 pb-4 pb-sm-0">
    <div class="bg-white ls-border-radius ls h-100">
      <PagePostsSectorHeader :boxTitle="boxTitle"/>
      <div v-for="post in posts[postsCategory]" :key="post.ID" class="px-3 py-2">
        <PagePostsSectorHeader :isSimple="true" :postTitle="post.Title"/>
        <PagePostsSectorStats :createdAt="post.CreatedAt" :isReadMore="false"/>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
}
</script>

<style scoped>

</style>