<template>
    <div style="min-height: 60vh; display: flex; justify-content: center; text-align: center; align-items: center">
        <div>
            <h1 v-if="error.statusCode === 404">Page not found</h1>
            <h1 v-else>An error occurred</h1>
            <NuxtLink to="/" style="color: #00b2a5; text-decoration: underline; font-size: 24px">Home page</NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'default',
    props: ['error'],
}
</script>
