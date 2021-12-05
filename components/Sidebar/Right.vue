<template>
  <div class="d-flex flex-column">
    <div class="row flex-grow-0">
      <div class="col-12">
        <Image :images="departmentsImages"/>
      </div>
    </div>
    <div class="row flex-grow-1">
      <PageZone postsLayout="PagePostsLayoutSimple" postsCategory="zam" :posts="posts" boxTitle="Zamówienia publiczne"/>
      <PageZone postsLayout="PagePostsLayoutSimple" postsCategory="work" :posts="posts" boxTitle="Praca"/>
    </div>
    <div class="row flex-grow-0 mt-3 mt-lg-0">
      <PageZone :employess="employess"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "RightSidebar",
  data: () => ({
    departmentsImages: {
      images: [
        {
          src: "./assets/img/unia.jpg",
          width: '300px',
          alt: 'bip'
        },
        {
          src: "./assets/img/epuap.jpg",
          width: '200px',
          alt: 'bip'
        },
        {
          src: "./assets/img/govPL.png",
          width: '230px',
          alt: 'bip'
        }
      ],
      componentClass: 'bg-white ls-border-radius ls d-flex flex-md-row align-items-center flex-column justify-content-around'
    },
    employess: {
      componentClass: 'bg-white ls-border-radius ls h-100'
    }
  }),
  props: {
    posts: Object
  }
}
</script>

<style scoped>

</style>