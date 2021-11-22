<template>
    <div class="container-fluid vh-100 m-background">
        <div class="row h-100">
            <LeftSidebar class="col-1 bg-white ls"/>
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
<style>
.ls {
    box-shadow: 0 0 30px #147aff1a;
}

.ls-border-radius {
    border-radius: 24px;
}
</style>
<style scoped>

.m-background {
    background-color: #1479ff1a;
}
</style>