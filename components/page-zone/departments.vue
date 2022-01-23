<template>
  <div class="col-12">
    <Image :images="departmentsImages"/>
  </div>
</template>

<script>
export default {
  name: "departments",
  data: () => ({
    departmentsImages: {
      images: [
        {
          src: "./assets/img/unia.jpg",
          width: '220',
          alt: 'bip'
        },
        {
          src: "./assets/img/epuap.jpg",
          width: '200',
          alt: 'bip'
        },
        {
          src: "./assets/img/govPL.png",
          width: '230',
          alt: 'bip'
        }
      ],
      componentClass: 'd-flex flex-md-row align-items-center flex-column justify-content-around p-3'
    },
  })
}
</script>

<style scoped>

</style>