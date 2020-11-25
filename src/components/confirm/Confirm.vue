<template>
    <div class="confirm">
        <div class="confirm-mask" @click="mask && close()" />

        <div class="confirm-container elevation-5">
            <!-- title -->
            <slot v-if="$slots.title" name="title" />
            <div v-else class="confirm-title">{{ title }}</div>

            <!-- content -->
            <slot v-if="$slots.content" name="content" />
            <div v-else class="confirm-content">{{ content }}</div>

            <!-- footer -->
            <slot v-if="$slots.footer" name="footer" />
            <div v-else class="confirm-footer d-flex align-center justify-space-between">
                <CyButton
                    outline
                    color="#666"
                    @click="onCancel ? onCancel() : close()"
                >
                    取消
                </CyButton>
                <CyButton
                    primary
                    @click="onOk"
                >
                    确认
                </CyButton>
            </div>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { ModalProps } from '@/components/confirm/index'
    import CyButton from '@/components/button/Button'

    export default defineComponent({
        name: 'Confirm',
        props: ModalProps,
        components: { CyButton },
        methods: {
            async onOk() {
                await this.onConfirm?.()
                this.afterClose?.()
            }
        }
    })
</script>

<style scoped lang="scss">
    @import '~@/assets/style/components.scss';

    .confirm {
        @include popup();
    }

    .confirm-mask {
        @include popup(50, absolute, rgba(0, 0, 0, 0.7));
    }

    .confirm-container {
        @include popup(51, absolute, white, true);
        width: 80%;
        border-radius: 5px;
        padding: 20px;
        animation: scale .35s ease;
    }

    .confirm-title {
        color: #333;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
    }

    .confirm-content {
        color: #3B3B3B;
        font-size: 18px;
        margin: 20px 0;
    }

    .confirm-footer button {
        width: calc((100% - 10px) / 2);
    }
</style>
