const navBar = () =>
    import(/* webpackChunkName: "NavBar" */ '@/components/navBar/NavBar.vue')

export default [
    {
        path: '/home',
        name: 'home',
        meta: { cascading: 1 },
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "home" */ '@/views/main/home/home.vue'
                ),
            navBar
        }
    },
    {
        path: '/activity',
        name: 'activity',
        meta: { cascading: 2 },
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "activity" */ '@/views/main/activity/activity.vue'
                ),
            navBar
        }
    },
    {
        path: '/recharge',
        name: 'recharge',
        meta: { cascading: 3 },
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "recharge" */ '@/views/main/recharge/recharge.vue'
                ),
            navBar
        }
    },
    {
        path: '/service',
        name: 'service',
        meta: { cascading: 4 },
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "service" */ '@/views/main/service/service.vue'
                ),
            navBar
        }
    },
    {
        path: '/personal',
        name: 'personal',
        meta: { cascading: 5 },
        components: {
            default: () =>
                import(
                    /* webpackChunkName: "personal" */ '@/views/main/personal/personal.vue'
                ),
            navBar
        }
    }
]
