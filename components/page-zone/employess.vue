<template>
      <div class="col-12">
        <Image :images="logoImage" :class="employess.componentClass" />
      </div>
</template>

<script>
export default {
  name: "employess",
  data: () => ({
    logoImage:{
      images:[
        {
          src: './assets/img/employess/person-1.jpg',
          width:'260px',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        {
          src: './assets/img/employess/person-2.jpg',
          width:'250px',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        {
          src: './assets/img/employess/person-2.jpg',
          width:'250px',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        {
          src: './assets/img/employess/person-1.jpg',
          width:'260px',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        }
      ],
      componentClass: 'd-flex flex-wrap employee-img py-3 justify-content-center gap-sm-4',
      hasDescriptions:true
    }
  }),
  props: {
    employess: Object
  }
}
</script>

<style scoped>

</style>