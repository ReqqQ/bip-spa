<template>
  <PageZonePosts
      :posts="posts"
      :postsLayout="postsLayout"
      :boxTitle="boxTitle"
      :postsCategory="postsCategory"
      v-if="posts" >
  </PageZonePosts>

<!--  <PageZoneEmployess :employess="employess" v-if="employess"/>-->

</template>

<script lang="ts">
export default {
  name: "index",
  props: {
    posts: Object,
    employess: Object,
    postsLayout: {
      type: String,
      default: null
    },
    postsCategory: {
      type: String,
      default: null
    },
    boxTitle: {
      type: String,
      default: null
    }
  },
  data: () => ({
    logoImage:{
      images:[
        {
          src: './assets/img/default-user.png',
          width:'100px',
          alt:'user-default'
        }
      ],
      componentClass:'flex-grow-0 h-25 d-flex align-items-center justify-content-center'
    }
  })
}
</script>

<style scoped>

</style>