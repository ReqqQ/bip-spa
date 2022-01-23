<template>
  <div class="d-flex flex-column gap-0 gap-lg-4">
    <div class="row flex-grow-0">
      <PageZone :departments="departments"/>
    </div>
    <div class="row flex-grow-1 posts-gap">
      <PageZone postsLayout="PagePostsLayoutSimple" color="blue" background="bg-blue" postsCategory="zam" :posts="posts" boxTitle="Zamówienia publiczne"/>
      <PageZone postsLayout="PagePostsLayoutSimple" color="blue" background="bg-blue" postsCategory="work" :posts="posts" boxTitle="Praca"/>
    </div>
    <div class="row flex-grow-0 mt-3 mt-lg-0">
      <PageZone boxTitle="Pracownicy" color="blue" background="bg-blue" :employess="employess"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  data: () => ({
    departments:true,
    employess: {
      componentClass: ''
    }
  }),
  props: {
    posts: Object
  }
}
</script>

<style scoped>
.posts-gap{
  row-gap: 1.5rem;
}
</style>