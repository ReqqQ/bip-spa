<template>
    <div class="row h-100 px-0 px-sm-0">
      <PageZone  boxTitle="Zamówienia publiczne" class="py-3 px-4" postsLayout="PagePostsLayoutAdvanced" postsCategory="news" :posts="posts"/>
      <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0 ls"/>
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
            params.append('categoryPosts', 'news,zam,work')

            const {data} = await $fetch('posts?' + params.toString(), {
                method: 'GET',
                baseURL: 'http://localhost:8000/api/'
            })
            this.posts = data
        },
    },
}
</script>