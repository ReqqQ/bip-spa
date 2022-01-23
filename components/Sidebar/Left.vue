<template>
    <div class=" d-none d-lg-flex align-items-center bg-white ls flex-column">
        <Image :images="logoImage" />
        <div class="d-flex sticky-menu flex-column justify-content-evenly align-items-center">
            <NuxtLink to="/"> <i class="bi bi-list  ls-icon"/></NuxtLink>
            <NuxtLink to="/search">  <i class="bi bi-search ls-icon"/></NuxtLink>
            <NuxtLink to="/categories">  <i class="bi bi-book ls-icon"/></NuxtLink>
            <NuxtLink to="/form">  <i class="bi bi-envelope ls-icon"/></NuxtLink>
            <NuxtLink to="/help">  <i class="bi bi-info-circle ls-icon"/></NuxtLink>
        </div>

    </div>
</template>

<script>
export default {
  name: "LeftSidebar",
  data: () => ({
    logoImage:{
      images:[
        {
          src: './assets/img/bip.png',
          width:'100px',
          alt:'bip'
        }
      ],
      componentClass:'my-4'
    }
  })
}
</script>

<style scoped lang="scss">
@media screen and (min-width: 992px) {
  .h-lg-25 {
    height: 25%!important;
  }
  .h-lg-0 {
    height: auto!important;
  }
  .sticky-menu{
    position: fixed;
    top: 25%;
    height: 50%!important;
  }
}
@media screen and (min-width: 1200px) {
  .h-xl-50 {
    height: 50%!important;
  }
}
.router-link-active .ls-icon:before {
  color: white;
  background-color: #1479FF;
  padding: 15px;
  border-radius: 15px;
  box-shadow: 0 15px 24px #147aff4d;
  transition: 1s;
}
.ls-icon{
    font-size: 1.5em;
    color: white;
    &:before{
        color: #1479FF;
        background-color: #147AFF1A;
        padding: 15px;
        border-radius: 15px;
    }
}
</style>