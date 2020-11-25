<template>
    <div class="navBar d-flex align-center justify-space-between">
        <router-link
            class="navBar-items fz-12 flex-1 d-flex flex-column justify-center align-center"
            :class="{
                active: routePath === n.path
            }"
            v-for="n in navBar"
            :key="n.path"
            :to="n.path"
        >
            <div class="navBarIcon" :class="[ `icon-${n.icon}` ]" />
            <p class="text-ellipsis text-center">{{ n.title }}</p>
        </router-link>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import { useI18n } from 'vue-i18n'

    interface INavBarConfig {
        title: string
        path: string
        icon: string
    }

    export default defineComponent({
        name: 'NavBar',
        computed: {
            routePath() {
                return this.$route.path
            }
        },
        setup() {
            const { t } = useI18n()

            // 底部导航配置
            const navBar: INavBarConfig[] = [
                {
                    title: t('main.home'),
                    path: '/home',
                    icon: 'home'
                },
                {
                    title: t('main.activity'),
                    path: '/activity',
                    icon: 'activity'
                },
                {
                    title: t('main.recharge'),
                    path: '/recharge',
                    icon: 'recharge'
                },
                {
                    title: t('main.service'),
                    path: '/service',
                    icon: 'service'
                },
                {
                    title: t('main.personal'),
                    path: '/personal',
                    icon: 'personal'
                }
            ]

            return {
                navBar
            }
        }
    })
</script>

<style scoped lang="scss">
    .navBar {
        position: absolute;
        bottom: 0;
        z-index: 10;
        width: 100%;
        height: 50px;
        color: #8e8e93;
    }

    .navBar-items {
        height: 100%;

        &.active {
            color: #71abff;

            .navBarIcon {
                background-position-y: 0;
            }
        }

        p {
            width: 100%;
            padding: 0 2px;
        }
    }

    .navBarIcon {
        width: 25px;
        height: 25px;
        background: url('./assets/navBar.png') no-repeat;
        background-size: 125px;
        transition: 0.35s ease;
    }

    $icon: (
        'home': 0,
        'activity': -25px,
        'recharge': -50px,
        'service': -75px,
        'personal': -100px
    );

    @each $i, $position in $icon {
        .navBarIcon.icon-#{$i} {
            background-position: $position -25px;
        }
    }
</style>
