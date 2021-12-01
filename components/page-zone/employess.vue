<template>
  <div :class="employess.componentClass">
    <div class="row  h-100">
        <Image :images="logoImage" />
    </div>
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
          src: './assets/img/employess/person-2.jpg',
          width:'250px',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        }
      ],
      componentClass: 'col-12 d-flex justify-content-around employee-img py-3',
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