<template>
    <div class="row h-100 px-0 px-sm-0">
        <div class="col-xl-6 pt-3">
            <div class="row">
                <div class="col-6" v-for="(data,index) in posts">
                    <ul class="list-group" v-on:click="setActive(index.replaceAll(' ', ''))">
                        <li class="list-group-item d-flex justify-content-between align-items-center"
                            data-bs-toggle="collapse" :href="'#'+index.replaceAll(' ', '')" role="button" aria-expanded="false"
                            aria-controls="collapseExample">
                            <i :class="isActive[index.replaceAll(' ', '')]?'bi bi-arrow-right-circle-fill':'bi bi-arrow-down-circle-fill'"></i> {{ index }}
                            <span class="badge bg-primary rounded-pill">{{Object.keys(data).length}}</span>
                        </li>
                    </ul>
                    <div class="collapse" :id="index.replaceAll(' ', '')">
                        <ul class="list-group">
                            <li class="list-group-item">One</li>
                            <li class="list-group-item">Two</li>
                            <li class="list-group-item">Three</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <SidebarRight :posts="posts" class="col-12 col-xl-6 mt-3 mt-xl-0 ls"/>
    </div>
</template>

<script>
export default {
    name: "bookmarks",
    layout: "default",
    data: () => ({
        isActive:{},
        posts:
                {
                    'category 1':
                            [
                                {
                                    'name': ' test'
                                },
                                {
                                    'name': ' test 2'
                                }
                            ],
                    'category 2':
                            [
                                {
                                    'name': ' test'
                                },
                                {
                                    'name': ' test 2'
                                },
                                {
                                    'name': ' test 2'
                                }
                            ],
                    'category 3':
                            [
                                {
                                    'name': ' test'
                                },
                                {
                                    'name': ' test 2'
                                },
                                {
                                    'name': ' test 2'
                                }
                            ],
                    'category 4':
                            [
                                {
                                    'name': ' test'
                                },
                                {
                                    'name': ' test 2'
                                },
                                {
                                    'name': ' test 2'
                                }
                            ]
                }
    }),
    methods: {
        log() {
            console.log(this.posts)
        },
        setActive(categoryName){
            console.log(categoryName)
           categoryName in this.isActive? delete this.isActive[categoryName]: this.isActive[categoryName] = true
            console.log(this.isActive)
        }
    }
}
</script>