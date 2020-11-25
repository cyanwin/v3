<template>
    <div class="tab-title d-flex align-center">
        <div
            class="tab-title-item flex-1 text-center"
            :class="{ active: t.key === modelValue }"
            v-for="(t, i) in tabs"
            :key="t.key"
            @click="onClick({ key: t.key, index: i })"
        >
            {{ t.title }}
        </div>

        <div class="tab-title-slider" :style="{ width: `${sliderWidth}px`, transform: `translateX(${sliderX}px)` }" />
    </div>
</template>

<script>
    export default {
        name: 'Tab',
        props: {
            tabs: {
                type: Array,
                required: true
            },
            modelValue: {
                type: Number,
                required: true
            },
            sliderWidth: {
                type: Number,
                default() {
                    return 36
                }
            }
        },
        data() {
            return {
                sliderX: 0
            }
        },
        methods: {
            onClick({ key, index }) {
                this.$emit('update:modelValue', key)

                this.sliderMove(index)
            },
            sliderMove(index) {
                const containerWidth = document.querySelector('.tab-title')?.clientWidth ?? 0,
                      cellWidth = containerWidth / this.tabs.length

                this.sliderX = cellWidth * index + (cellWidth / 2) - (this.sliderWidth / 2)
            }
        },
        mounted() {
            this.sliderMove(0)
        }
    }
</script>

<style lang="scss" scoped>
@import "~@/assets/style/_colors.scss";

.tab-title {
    height: 40px;
    position: relative;
}

.tab-title-slider {
    position: absolute;
    height: 2px;
    border-radius: 2px;
    bottom: 0;
    background: $primary;
    transition: .35s ease;
}

.tab-title-item {
    width: 10px;
    height: 100%;
    line-height: 40px;
}

.tab-title-item.active {
    color: $primary;
}

.tab-container {
    position: relative;
}
</style>
