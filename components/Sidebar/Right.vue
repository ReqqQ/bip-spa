<template>
  <div class="d-flex flex-column">
    <Image class="flex-grow-0" :images="departmentsImages"/>
    <div v-if="posts" class="row  pt-4 pb-4 flex-grow-0">
      <div class="col-6 ">
        <PagePostsSimple :posts="posts.zam" boxTitle="Zamówienia publiczne"/>
      </div>
      <div class="col-6">
        <PagePostsSimple :posts="posts.work" boxTitle="Praca"/>
      </div>
    </div>
    <SidebarRightEmployees class="flex-grow-1"/>
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
      componentClass: 'bg-white ls-border-radius ls d-flex justify-content-around p-3'
    }
  }),
  props: {
    posts: Object
  }
}
</script>

<style scoped>

</style>