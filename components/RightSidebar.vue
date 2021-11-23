<template>
    <div class="d-flex flex-column">
        <RightSidebarDepartments class="flex-grow-0"/>
        <div  v-if="posts" class="row  pt-4 pb-4 flex-grow-0">
            <div class="col-6 ">
                <RightSidebarPosts :posts="posts.zam"/>
            </div>
            <div class="col-6">
                <RightSidebarPosts :posts="posts.work"/>
            </div>
        </div>
        <RightSidebarContact class="flex-grow-1"/>
    </div>
</template>

<script>
export default {
    name: "RightSidebar",
    props: {
        posts: Object
    }
}
</script>

<style scoped>

</style>