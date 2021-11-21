import {defineNuxtConfig} from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    meta: {
        charset: 'utf-8',
        meta: [
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        link: [
            {
                rel: 'stylesheet',
                style: 'text/css',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css'
            },
            {
                rel: 'stylesheet',
                style: 'text/css',
                href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.0/font/bootstrap-icons.css'
            }
        ],
    }
})