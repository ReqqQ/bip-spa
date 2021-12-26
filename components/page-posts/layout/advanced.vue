<template>
  <div class="col-12 col-xl-6 d-flex flex-column justify-content-flex-start justify-content-xxl-between" ref="advancedPostsBox">
    <div v-if="posts[postsCategory]" v-for="(post,postIndex) in posts[postsCategory]" :key="post.ID" class="callout callout-danger" :class="getPostsClassLayout(postIndex)" >
      <PagePostsSectorHeader :postTitle="post.title" :postDescription="post.title"/>
      <PagePostsSectorStats :createdAt="post.created_at" :isReadMore="true"/>
    </div>
  </div>
</template>

<script lang="ts">

import {calculateCellHeight} from "table/dist/src/calculateCellHeight";

export default {
  name: "advanced",
  props: {
    posts: {
      type: Object,
      default: []
    },
    postsLayout: {
      type: String,
      default: null
    },
    boxTitle: {
      type: String,
      default: null
    },
    postsCategory: {
      type: String,
      default: null
    }
  },
  updated() {
    if(!this.isCalculated){
      this.calculatePostsCount()
    }
  },
  methods: {
    getPostsClassLayout(postIndex: Number) {
      let advancedClass = 'advanced-post-'+postIndex
      return 'mb-2 ' + advancedClass
    },
    calculatePostsCount() {
      let postsBoxHeight = window.innerHeight
      let postHeight = this.$el.getElementsByClassName('advanced-post-0').item(0).clientHeight

      console.log([
          postHeight,
          window.innerHeight
      ])
      let postsCount = Math.floor(postsBoxHeight / postHeight);
      this.posts[this.postsCategory] = this.posts[this.postsCategory].slice(0, postsCount)
      this.isCalculated = true;
    }
  },
  data: () => ({
    isCalculated: false
  }),
}
</script>

<style scoped>
.callout {
  padding: 20px 20px 10px 20px;
  border: 0px solid #d6e0ec;
  border-left-width: 5px;
  border-radius: 3px 24px 24px 3px;
  background-color: #e6f5ff;
}

.callout-danger {
  border-left-color: #d9534f;
}
</style>