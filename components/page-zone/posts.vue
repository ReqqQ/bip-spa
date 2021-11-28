<template>
    <div v-if="isSimple" class="col-6">
<!--      <div v-if="posts[postsType]" class="bg-white ls-border-radius ls h-100">-->
<!--        <PagePostsHeader :boxTitle="boxTitle"/>-->
<!--        <PagePosts  v-for="post in posts[postsType].slice(0,5)" :key="post.ID" :post="post" :isSimplePost="true"/>-->
<!--      </div>-->
    </div>

    <div v-else  class="col-6 px-5 d-flex mb-1 flex-column justify-content-between">
      <PagePosts v-for="post in posts[postsType]" :key="post.ID" :post="post"/>
    </div>

</template>

<script>
export default {
  name: "posts",
  props: {
    posts: Object,
    postsType: {
      type: String,
      default: null
    },
    boxTitle: {
      type: String,
      default: null
    },
    isSimple: {
      type: Boolean,
      default: false
    },
  },
}
</script>

<style scoped>

</style>