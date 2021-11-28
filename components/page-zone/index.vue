<template>
  <PageZonePosts
      :posts="posts"
      :postsType="postsType"
      :boxTitle="boxTitle"
      :isSimple="isSimple"
      v-if="posts"/>

<!--  <PageZoneEmployess :employess="employess" v-if="employess"/>-->

</template>

<script>
export default {
  name: "index",
  props: {
    posts: Object,
    employess: Object,
    postsType: {
      type: String,
      default: null
    },
    boxTitle: {
      type: String,
      default: null
    },
    isSimple: {
      type: Boolean,
      default: false
    },
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