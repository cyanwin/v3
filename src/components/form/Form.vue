<template>
    <form @submit="onSubmit" novalidate>
        <slot />
    </form>
</template>

<script>
    export default {
        name: 'Form',
        methods: {
            onSubmit(e) {
                e.preventDefault()
            }
        }
    }
</script>

<style scoped>

</style>
