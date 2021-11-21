<template>
<div class="d-flex flex-column ">
    <div class="flex-grow-0">
<!--        <img src="" class="img-fluid" alt="...">-->
    </div>
    <div class="d-flex flex-column justify-content-around align-items-center flex-grow-1">
        <i class="bi bi-list  ls-icon-active"/>
        <i class="bi bi-list ls-icon" v-for="x in 4" :key="x"/>
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
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0 15px 24px #147aff4d;
    }
    &:before{
        color: #1479FF;
        background-color: #147AFF1A;
        padding: 10px;
        border-radius: 15px;
    }
}
</style>