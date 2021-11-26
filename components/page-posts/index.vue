<template>
    <div class="callout callout-danger mb-2">
        <div>
            <p class="h5">  {{post.Title.slice(0,60)+'...'}}</p>
        </div>
        <div>
            <small class="text-muted">{{post.Title.slice(0,210)+'...'}}</small>
        </div>
        <div class="mt-2 d-flex justify-content-between align-items-end">
            <button class="btn btn-danger ls-border-radius">Czytaj więcej</button>
            <small class="text-muted">Admin | 2021-11-23</small>
        </div>
    </div>
</template>

<script>
export default {
    name: "PagePosts",
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
    box-shadow: inset -5px 0 10px 0 #f8fbff;
}
.callout-danger{
    border-left-color: #d9534f;
}
</style>