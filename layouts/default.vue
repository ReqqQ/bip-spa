<template>
    <div class="container-fluid vh-100 m-background">
        <div class="row h-100">
            <SidebarLeft class="col-md-2 col-lg-1"/>
            <div class="col-12 col-lg-11">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "default",
}
</script>
<style>
.ls {
    box-shadow: 0 0 20px 0px #c5d2e3
}

.ls-border-radius {
    border-radius: 24px;
}
body{
    font-family: 'Sofia Pro';
}
</style>
<style scoped>

.m-background {
    background-color: #f8fbff;
}
</style>
