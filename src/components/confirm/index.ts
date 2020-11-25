import { createApp, ExtractPropTypes } from 'vue'

import ConfirmComp from './Confirm.vue'

// interface IModalProps {
//     title?: string | Component
//     content: string | Component
//     mask?: boolean
//     footer?: string | Component
//     confirmText?: string
//     confirmType?: string
//     onConfirm?: () => void
//     confirmLoading?: boolean
//     cancelText?: string
//     onCancel?: () => void
//     afterClose?: () => void
// }

export const ModalProps = {
    title: [ String, Object ],
    content: {
        type: [ String, Object ],
        required: true
    },
    mask: {
        type: Boolean,
        default: true
    },
    footer: [ String, Object ],
    confirmText: String,
    confirmType: String,
    onConfirm: Function,
    confirmLoading: Boolean,
    cancelText: String,
    onCancel: Function,
    afterClose: Function
}

type IModalProps = ExtractPropTypes<typeof ModalProps>

const divEle = document.createElement('div')
document.body.append(divEle)

const close = () => {
    document.body.removeChild(divEle)
}

const Confirm = (props: IModalProps) => {
    ConfirmComp.setup = () => {
        return {
            ...props,
            close
        }
    }

    return createApp(ConfirmComp).mount(divEle)
}

Confirm.close = close

export default Confirm
