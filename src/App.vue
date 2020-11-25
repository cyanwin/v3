<template>
    <router-view name="header" />

    <router-view v-slot="{ Component }" class="child-view">
        <transition :name="transitionName">
            <component :is="Component" />
        </transition>
    </router-view>

    <router-view name="navBar" />
</template>

<script>
    import { defineComponent } from 'vue'
    import { transitionName } from '@/router'

    export default defineComponent({
        setup() {
            return {
                transitionName
            }
        }
    })
</script>

<style scoped>
    .child-view {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        will-change: transform;
        overflow-y: auto;
    }

    .slide-left-enter-active,
    .slide-right-enter-active {
        transition: 0.35s ease;
    }

    .slide-left-leave-active,
    .slide-right-leave-active {
        transition: 0.35s ease;
    }

    .slide-left-enter-from,
    .slide-right-leave-to {
        transform: translateX(-100%);
    }

    .slide-left-leave-to,
    .slide-right-enter-from {
        transform: translateX(100%);
    }
</style>
