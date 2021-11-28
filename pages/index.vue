<template>
    <div class="row h-100 pt-5 pe-4">
      <PageZone postsType="news" :posts="posts"/>
<!--      <SidebarRight :posts="posts" class="col-6"/>-->
    </div>
</template>

<script>
export default {
    name: "index",
    layout: "default",
    data: () => ({
        posts: [],
    }),
    mounted() {
        this.getPosts()
    },
    methods: {
        async getPosts() {
            const params = new URLSearchParams()
            params.append('categoryPosts', 'news')
            params.append('categoryPosts', 'zam')
            params.append('categoryPosts', 'work')
            params.append('isGroupByCategory', '1')

            const {data} = await $fetch('posts?' + params.toString(), {
                method: 'GET',
                baseURL: 'http://localhost:8080/api/'
            })
            this.posts = data
        },
    },
}
</script>

<style scoped>

</style>