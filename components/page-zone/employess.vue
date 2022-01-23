<template>
  <div class="col-xxl-12 col-xl-12 col-12 col-sm-6 mt-3 mt-lg-0 pb-2">
    <div class="simple-posts-title  ls-border-radius h-100">
      <PagePostsSectorHeader :boxTitle="boxTitle"/>
      <Image :images="logoImage" :class="employess.componentClass" />
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
          width:'260',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        {
          src: './assets/img/employess/person-2.jpg',
          width:'250',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        {
          src: './assets/img/employess/person-2.jpg',
          width:'250',
          alt:'default-user',
          title:'User Name',
          description:'Stanowisko'
        },
        // {
        //   src: './assets/img/employess/person-2.jpg',
        //   width:'250px',
        //   alt:'default-user',
        //   title:'User Name',
        //   description:'Stanowisko'
        // }
      ],
      componentClass: 'd-flex flex-wrap employee-img py-3 justify-content-evenly gap-sm-4',
      hasDescriptions:true
    }
  }),
  props: {
    employess: Object,
    boxTitle: {
      type: String,
      default: null
    }
  }
}
</script>
<style scoped>
.simple-posts-title{
  background: #ffe8e8;
  box-shadow: inset 0 20px 20px 6px #0000000f;
}
</style>