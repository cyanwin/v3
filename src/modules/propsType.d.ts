type SizePropTypes = 'xsm' | 'sm' | 'md' | 'lg' | 'xlg'

interface IInputValidator {
    rule?: string
    func?: (val: string) => boolean
    errorMsg: string
}
