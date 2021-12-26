<template>
  <div class="row h-100 px-0 px-sm-2 py-3">
    <div class="col-xl-6" ref="advancedPostsBox">
      test
    </div>
    <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0"/>
  </div>
</template>

<script>
export default {
  name: "search",
  layout: "default",
  data: () => ({
    posts: [],
  }),
  mounted() {
    // this.getPosts()
  },
  methods: {
    // async getPosts() {
    //   const params = new URLSearchParams()
    //   params.append('categoryPosts', 'news,zam,work')
    //
    //   const {data} = await $fetch('posts?' + params.toString(), {
    //     method: 'GET',
    //     baseURL: 'http://localhost:8000/api/'
    //   })
    //   this.posts = data
    // },
  },
}
</script>

<style scoped>

</style>