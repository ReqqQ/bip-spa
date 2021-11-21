<template>
    <div class="container-fluid vh-100 m-background">
        <div class="row h-100 p-2">
            <LeftSidebar class="col-1 bg-white ls-border-radius ls"/>
            <div class="col-11">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "default"
}
</script>

<style scoped>
.ls{
    box-shadow: 0 0 30px #147AFF1A;
}
.ls-border-radius {
    border-radius: 24px;
}
.m-background {
    background-color: #1479FF1a;
}
</style>