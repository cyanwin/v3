<template>
    <div class="rollText">
        <div class="rollText-move">
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'RollText',
        data() {
            return {
                moveDistance: 0,
                animationFrame: null
            }
        },
        methods: {
            animationRoll() {
                if (!this.$slots.default) return

                const containerEle = document.querySelector('.rollText')
                const moveEle = document.querySelector('.rollText-move')

                if (containerEle && moveEle) {
                    const containerWidth = containerEle.clientWidth
                    const moveWidth = moveEle.clientWidth

                    if (this.moveDistance > -moveWidth) {
                        this.moveDistance -= 1
                    } else {
                        this.moveDistance = containerWidth
                    }

                    moveEle.style.transform = `translateX(${this.moveDistance}px)`

                    this.animationFrame = window.requestAnimationFrame(this.animationRoll)
                }
            }
        },
        mounted() {
            this.animationRoll()
        },
        updated() {
            this.animationRoll()
        },
        beforeMount() {
            window.cancelAnimationFrame(this.animationFrame)
            this.animationFrame = null
        }
    }
</script>

<style scoped>
.rollText {
    width: 100%;
}

.rollText-move {
    width: max-content;
    white-space: nowrap;
}
</style>
