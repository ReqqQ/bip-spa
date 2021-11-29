<template>
<!--  <div class="d-flex flex-column">-->
<!--    <Image class="flex-grow-0" :images="departmentsImages"/>-->
<!--    <div class="row  pt-4 pb-4 flex-grow-0">-->
<!--      <PageZone postsType="zam" :posts="posts" :isSimple="true" boxTitle="Zamówienia publiczne"/>-->
<!--      <PageZone postsType="work" :posts="posts" :isSimple="true" boxTitle="Praca"/>-->
<!--    </div>-->
<!--    <div class="row flex-grow-1">-->
<!--      <PageZone :employess="{}"/>-->
<!--    </div>-->
<!--  </div>-->
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