<template>
    <div class="row h-100 pt-5 pe-4">
        <div class="col-6 px-5 d-flex mb-1 flex-column justify-content-between">
            <HomePagePosts v-if="posts['news']" v-for="post in posts['news'].slice(0,5)" :key="post.ID" :post="post"/>
        </div>
        <RightSidebar class="col-6"/>
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