<template>
    <div class="d-flex flex-column">
        <RightSidebarDepartments class="flex-grow-0"/>
        <div class="row  pt-4 flex-grow-0">
            <div class="col-6 ">
                <RightSidebarDepartments/>
            </div>
            <div class="col-6">
                <RightSidebarDepartments/>
            </div>
        </div>
        <RightSidebarContact class="flex-grow-1"/>
    </div>
</template>

<script>
export default {
    name: "RightSidebar"
}
</script>

<style scoped>

</style>