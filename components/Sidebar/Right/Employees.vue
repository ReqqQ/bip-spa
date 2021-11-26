<template>
    <div class="bg-white rs-posts-radius ls h-100">
        <div class="bg-danger rs-posts-radius d-flex justify-content-center text-white py-2">
            Nasi pracownicy
        </div>
        <div class="p-3 d-flex justify-content-around">
            <div v-for="image in 3" :key="image" class="d-flex flex-column align-items-center">
                <img width="100px" src="@/assets/img/default-user.png" class="img-fluid" alt="user-default" />
                <span>User Name</span>
                <span>Stanowisko</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>

<style scoped>
.rs-posts-radius{
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
}
</style>