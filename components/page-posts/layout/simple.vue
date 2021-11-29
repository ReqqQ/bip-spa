<template>
  <div class="col-6">
    <div class="bg-white ls-border-radius ls h-100">
      <PagePostsHeader :boxTitle="boxTitle"/>
<!--      <PagePosts v-for="post in posts[postsType]" :key="post.ID" :post="post" :isSimplePost="true"/>-->
      <PagePostsHeader :isSimple="isSimplePost" :postTitle="post.Title"/>
      <PagePostsStats :createdAt="post.CreatedAt"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "simple"
}
</script>

<style scoped>

</style>