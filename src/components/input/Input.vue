<template>
    <div class="input">
        <div
            class="input-container d-flex align-center justify-space-between py-n1"
            :class="containerClasses"
        >
            <label
                v-if="label"
                class="input-label"
                :for="$attrs.name"
            >
                {{ label }}
            </label>

            <input
                class="flex-1"
                v-bind="inputAttrs"
                :type="inputType"
                :value="modelValue"
                @input="onInput"
                @focus="dataToggle('focus')"
                @blur="dataToggle('focus')"
            >

            <i
                v-if="clear && modelValue"
                class="iconfont ml-n2 iconicon_cancel"
                @click="$emit('update:modelValue', '')"
            />

            <i
                v-if="inputAttrs?.type === 'password'"
                class="iconfont ml-n2"
                :class="eyeIcon"
                @click="dataToggle('visible')"
            />
        </div>

        <p v-if="errTip" class="input-errTip">
            <span v-show="errorMsg">{{ errorMsg }}</span>
        </p>
    </div>
</template>

<script>
    import { defineComponent, reactive, computed } from 'vue'

    export default defineComponent({
        name: 'Input',
        props: {
            label: String,
            validator: {
                type: Array
            },
            clear: {
                type: Boolean,
                default: true
            },
            modelValue: [ String, Number ],
            inputAttrs: {
                type: Object,
                default() {
                    return { type: 'text' }
                }
            },
            errTip: {
                type: Boolean,
                default: true
            },
            errorMsg: String
        },
        setup(props) {
            const data = reactive({
                visible: props?.inputAttrs?.type !== 'password',
                focus: false
            })

            const inputType = computed(() => data.visible ? 'text' : (props?.inputAttrs?.type ?? 'text')),
                  containerClasses = computed(() => ({
                      focused: data.focus,
                      err: props.errorMsg
                  })),
                  eyeIcon = computed(() => data.visible ? 'iconicon_eye_open' : 'iconicon_eye_close')

            const dataToggle = key => {
                data[key] = !data[key]
            }

            return {
                inputType,
                containerClasses,
                dataToggle,
                eyeIcon,
                ...data
            }
        },
        methods: {
            onInput({ target }) {
                this.$emit('update:modelValue', target.value)
                target.setCustomValidity('')
            }
        }
    })
</script>

<style scoped>
	.input-container {
		height: 40px;
		overflow: hidden;
		position: relative;
		transition: background-size .35s cubic-bezier(0.64, 0.09, 0.08, 1);
		background-image:
			linear-gradient(#2D7BFF, #2D7BFF),
			linear-gradient(#ff6363, #ff6363),
			linear-gradient(#E0E0E0, #E0E0E0);
		background-repeat: no-repeat;
		background-size: 0 2px, 0 2px, 100% 1px;
		background-position: 50% 100%, 50% 100%, 50% 100%;
	}

	.input-container.focused {
		background-size: 100% 2px, 0 2px, 100% 1px;
	}

	.input-container.err {
		background-size: 0 2px, 100% 2px, 100% 1px;
	}

	.input-errTip {
		height: 20px;
		line-height: 20px;
		font-size: 12px;
		color: #ff6363;
	}

	.input-container input {
		height: 100%;
	}

	.input-container .iconfont {
		font-size: 20px;
		color: #ccc;
	}
</style>
