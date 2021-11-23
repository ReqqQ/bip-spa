<template>
    <div class="callout callout-danger">
        <div>
            {{post.Title.slice(0,95)+'...'}}
        </div>
        <div class="mt-4 d-flex justify-content-between">
            <button class="btn btn-danger ls-border-radius">Czytaj więcej</button>
            <span>Admin | 2021-11-23</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Posts",
    props: {
        post: Object
    }
}
</script>

<style scoped>
.callout{
    padding: 20px;
    /*margin: 20px 0;*/
    border:0px solid #d6e0ec;
    border-left-width: 5px;
    border-radius: 3px 24px 24px 3px;
    background-color: #e6f5ff;
}
.callout-danger{
    border-left-color: #d9534f;
}
</style>