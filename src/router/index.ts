import { createRouter, createWebHistory } from 'vue-router'
import { ref, computed } from 'vue'
import { addHistory, history } from '@/utils'
import { TRANSITION_LEFT, TRANSITION_RIGHT } from '@/utils/modules'

import main from '@/router/main'

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            redirect: '/home'
        },
        ...main
    ]
})

/** 提供给 App transition 组件 name 的变量 */
const routerTransition = ref<TransitionName>(TRANSITION_LEFT)
export const transitionName = computed(() => routerTransition.value)

/**
 * @function beforeEach 生命周期
 * @constant {string} toPath 将要跳转的路由地址
 * @constant {string} toCascading 将要跳转的路由层级
 * @constant {string} fromPath 将要离开的路由地址
 * @constant {string} fromCascading 将要离开的路由层级
 * @var {boolean} newView 判断是否是最新打开的页面
 * */
router.beforeEach(
    (
        { fullPath: toPath, meta: { cascading: toCascading } },
        { fullPath: fromPath, meta: { cascading: fromCascading } }
    ) => {
        let newView = true

        // 通过路由已配置的层级参数判断
        if (toCascading && fromCascading) {
            newView = toCascading > fromCascading
        } else {
            // 通过读取 history 存储的层级判断
            newView =
                Number(history.get(toPath)) > Number(history.get(fromPath))
        }

        // 根据页面是否为新打开的页面赋值动画变量名 classname
        routerTransition.value = newView ? TRANSITION_RIGHT : TRANSITION_LEFT
    }
)

/**
 * @function afterEach 生命周期
 * @description 进入每个页面后记录最新的路由层级用于切换时的动画判断
 * */
router.afterEach(({ fullPath, meta: { cascading } }) => {
    addHistory(fullPath, cascading)
})

export default router
