<template>
    <div class="bg-white ls-border-radius ls p-3 h-100">
        <div v-for="post in posts" :key="post.ID">
            <div>
                <span>{{post.Title.slice(0,45)+'...'}}</span>
            </div>
            <div class="mt-2 d-flex justify-content-end align-items-end">
                <small class="text-muted">Admin | 2021-11-23</small>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Posts",
    props: {
        posts: Object
    }
}
</script>

<style scoped>

</style>