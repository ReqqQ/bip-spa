import { useState } from '#app'

export const apiPosts = async () => {
    const params = new URLSearchParams()
    params.append('categoryPosts', 'news')
    params.append('categoryPosts', 'zam')
    params.append('categoryPosts', 'work')
    params.append('isGroupByCategory', '1')

    // @ts-ignore
    const {data}  = await $fetch('posts?' + params.toString(), {
        method: 'GET',
        baseURL: 'http://localhost:8080/api/'
    })
    return useState('posts', () => data)
}