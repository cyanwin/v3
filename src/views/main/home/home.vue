<template>
    <main class="main home">
        <Header title="首页" />

        <Tab
            v-model="tab"
            :tabs="tabs"
        />
        
        <div class="w-40 h-40 bg-red-100 rounded-full flex items-center justify-center">
            ddd
        </div>
    </main>
</template>

<script>
    import Header from '@/components/header/Header'
    import Tab from '@/components/tab/Tab'

    export default {
        name: 'home',
        components: { Header, Tab },
        setup() {

            const tabs = [
                { key: 0, title: 'tab1' },
                { key: 1, title: 'tab2' },
                { key: 2, title: 'tab3' },
                { key: 3, title: 'tab4' }
            ]

            return {
                tabs,
            }
        },
        data() {
            return {
                tab: 0
            }
        }
    }
</script>

<style scoped>
</style>
