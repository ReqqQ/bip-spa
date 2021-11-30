<template>
  <div class="bg-white ls-border-radius ls h-100">
    <div class="row  h-100">
      <div class="d-flex flex-column col-3 justify-content-center" v-for="x in 4">
        <Image :images="logoImage" />
        <span class="text-center">User Name</span>
        <span class="text-center">Stanowisko</span>
      </div>
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
          src: './assets/img/default-user.png',
          width:'150px',
          alt:'default-user'
        }
      ],
      componentClass:'flex-grow-0 h-50 d-flex align-items-center justify-content-center'
    }
  })
}
</script>

<style scoped>

</style>