<template>
  <div class="row h-100 px-0 px-sm-0">
    <div class="col-xl-6 pt-3" ref="advancedPostsBox">
      <div class="p-1 bg-search rounded rounded-pill shadow-sm mb-4">
        <div class="input-group ">
          <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1"
                 class="form-control border-0 bg-light">
          <div class="input-group-append">
            <button id="button-addon1" type="submit" class="btn btn-link text-primary"> <i class="bi bi-search ls-icon"/></button>
          </div>
        </div>
      </div>
    </div>
    <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0 ls"/>
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
.bg-search{
  background-color: #e6f5ff;
}
.form-control:focus {
  box-shadow: none;
}
.form-control{
  background-color: #e6f5ff!important;
}
.form-control::placeholder {
  font-size: 0.95rem;
  background-color: #e6f5ff;
  color: #aaa;
  font-style: italic;
}
</style>