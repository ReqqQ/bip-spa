<template>
    <PageZonePosts
            :posts="posts"
            :postsLayout="postsLayout"
            :boxTitle="boxTitle"
            :postsCategory="postsCategory"
            :color ="color"
            :background="background"
            v-if="posts">
    </PageZonePosts>

    <PageZoneEmployess :boxTitle="boxTitle" :employess="employess" v-if="employess"/>
    <PageZoneDepartments :departments="departments" v-if="departments"/>
</template>

<script lang="ts">
export default {
    name: "index",
    props: {
        posts: Object,
        departments: Boolean,
        employess: Object,
        postsLayout: {
            type: String,
            default: null
        },
        postsCategory: {
            type: String,
            default: null
        },
        boxTitle: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: ""
        },
        background: {
            type: String,
            default: ""
        }
    },
    data: () => ({
        logoImage: {
            images: [
                {
                    src: './assets/img/default-user.png',
                    width: '100px',
                    alt: 'user-default'
                }
            ],
            componentClass: 'flex-grow-0 h-25 d-flex align-items-center justify-content-center'
        }
    })
}
</script>

<style scoped>

</style>