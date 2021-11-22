<template>
<div class="d-flex flex-column ">
    <div class="flex-grow-0 h-25 d-flex align-items-center justify-content-center">
        <img width="100px" src="@/assets/img/bip.png" class="img-fluid" alt="bip">
    </div>
    <div class="d-flex h-50 flex-column justify-content-evenly align-items-center">
        <i class="bi bi-list  ls-icon-active"/>
        <i class="bi bi-search ls-icon"/>
        <i class="bi bi-book ls-icon"/>
        <i class="bi bi-envelope ls-icon"/>
        <i class="bi bi-info-circle ls-icon"/>
    </div>

</div>
</template>

<script>
export default {
    name: "LeftSidebar"
}
</script>

<style scoped lang="scss">
.ls-icon{
    font-size: 1.5em;
    color: white;
    &-active:before{
        font-size: 1.5em;
        color: white;
        background-color: #1479FF;
        padding: 15px;
        border-radius: 15px;
        box-shadow: 0 15px 24px #147aff4d;
    }
    &:before{
        color: #1479FF;
        background-color: #147AFF1A;
        padding: 15px;
        border-radius: 15px;
    }
}
</style>