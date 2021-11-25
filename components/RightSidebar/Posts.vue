<template>
    <div class="bg-white ls-border-radius ls h-100">
        <div class="bg-danger rs-posts-radius d-flex justify-content-center text-white py-2">
            {{boxTitle}}
        </div>
        <div class="p-3">
            <div v-for="post in posts" :key="post.ID" class="mb-4">
                <div>
                    <span><i class="bi bi-caret-right-fill text-danger"></i>{{transformTitle(post.Title)}}</span>
                </div>
                <div class="mt-2 d-flex justify-content-evenly align-items-end">
                    <small class="text-muted ">  <i class="bi bi-person"></i>  Admin </small>
                    <small class="text-muted ">  <i class="bi bi-eye"></i> 50 </small>
                    <small class="text-muted ">  <i class="bi bi-clock"></i>   {{post.CreatedAt}} </small>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import {string} from "postcss-selector-parser";

export default {
    name: "Posts",
    props: {
        posts: Object,
        boxTitle: String
    },
    methods:{
        transformTitle(postTitle: string){
            let slicedPostTile = postTitle.slice(0,45)
            return slicedPostTile.charAt(0).toUpperCase() + slicedPostTile.slice(1) + '...'
        }
    }
}
</script>

<style scoped>
.rs-posts-radius{
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}
</style>