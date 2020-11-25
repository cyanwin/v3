<template>
    <button
        class="button"
        :class="classes"
        :style="{ color, backgroundColor }"
        v-bind="$attrs"
        :type="htmlType"
    >
        <slot />
    </button>
</template>

<script>
    import { defineComponent } from 'vue'
    import { SIZE_PROPS_MD } from '@/utils'

    export default defineComponent({
        name: 'Button',
        props: {
            block: Boolean,
            flat: Boolean,
            primary: Boolean,
            outline: Boolean,
            color: String,
            backgroundColor: String,
            round: Boolean,
            size: {
                type: String,
                default: SIZE_PROPS_MD
            },
            htmlType: String
        },
        setup({
            block,
            flat,
            size,
            primary,
            outline,
            round
        }) {
            const classes = {
                'button-block': block,
                'button-flat': flat,
                'button-primary': primary,
                'button-outline': outline,
                'button-round': round,
                [`button-${size}`]: size,
            }

            return {
                classes
            }
        }
    })
</script>

<style scoped lang="scss">
    .button {
        display: block;
        border-radius: 4px;
    }

    $xsm: xsm 12px 12px;
    $sm: sm 28px 12px;
    $md: md 36px 14px;
    $lg: lg 44px 14px;
    $xlg: xlg 52px 16px;

    $buttonSizes: ($xsm, $sm, $md, $lg, $xlg);

    @each $size, $height, $fontSize in $buttonSizes {
        .button-#{$size} {
            height: $height;
            font-size: $fontSize;
            padding: 0 $fontSize;
        }

        .button-#{$size}.button-round {
            border-radius: $height;
        }
    }

    .button-block {
        width: 100%;
    }

    .button-outline {
        border: 1px solid currentColor;
    }

    .button-primary {
        background: #4290FF;
        color: #fff;
    }
</style>
