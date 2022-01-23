<template>
  <span v-if="isSimplePost()"><i class="bi bi-caret-right-fill text-danger"></i>{{ transformTitle(postTitle, 45) }}</span>
  <p v-if="isExpandPost()" class="h5"> {{ transformTitle(postTitle, 60) }}</p>
  <div v-if="boxTitle" class="h4 simple-posts-title rs-posts-radius d-flex-inline pt-3 px-4">
    {{ boxTitle }}
    <hr class="my-3"/>
  </div>
  <div v-if="postDescription">
    <small class="text-muted">{{ transformTitle(postDescription, 210) }}</small>
  </div>
</template>

<script lang="ts">
export default {
  name: "post-title",
  props: {
    postTitle: {
      type: String,
      default: null
    },
    postDescription: String,
    boxTitle: String,
    isSimple: {
      type: Boolean,
      default: false
    },
    isDescription: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    isSimplePost():boolean{
      return this.isSimple && this.postTitle
    },
    isExpandPost():boolean{
      return !this.isSimple && this.postTitle
    },
    transformTitle(postTitle: string, sliceLength: number) {
      let slicedPostTile = postTitle.slice(0, sliceLength)
      return slicedPostTile.charAt(0).toUpperCase() + slicedPostTile.slice(1) + '...'
    }
  }
}
</script>
<style>
.simple-posts-shadow{
  box-shadow: inset 0 0px 20px 6px #0000000f;
}
</style>
<style scoped>
.simple-posts-title{
  background: #ffe8e8;
  color: red;
  font-weight: bolder;
}
.simple-posts-title hr{
  height: 7px;
  background: rgb(255,232,232);
  background: linear-gradient(90deg, rgba(255,232,232,1) 30%, rgba(0,172,255,1) 60%, rgba(255,0,0,1) 100%);
  border-radius: 25px;
  width: 70%;
}
.rs-posts-radius {
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}
</style>