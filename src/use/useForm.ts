import { reactive, watch } from 'vue'
import { cloneDeep } from 'lodash-es'

interface IUseFormOptions {
    watch?: boolean
}

interface IUseFormProps {
    modelRef: IKeyValue
    rulesRef?: IKeyValue
    options?: IUseFormOptions
}

export const useForm = ({ modelRef, rulesRef = {}, options = { watch: true } }: IUseFormProps) => {
    const initialValues = cloneDeep(modelRef)

    const validateMessage: IKeyValue = reactive({})

    const resetFields = (newValues: IKeyValue) => {
        Object.assign(modelRef, {
            ...cloneDeep(initialValues),
            ...newValues,
        })
    }

    const validField = (name: keyof IKeyValue) => {
        validateMessage[name] = rulesRef[name].validator(modelRef[name])
    }

    const valid = () => {
        Object.keys(rulesRef).forEach(e => {
            validField(e)
        })

        return !Object.values(validateMessage).some(Boolean)
    }

    if (options.watch) {
        watch(
            modelRef,
            () => {
                valid()
            }
        )
    }

    return {
        modelRef,
        resetFields,
        validField,
        valid,
        validateMessage
    }
}
