import { createI18n } from 'vue-i18n'

// 语言常量
export const zh = 'zh',
    en = 'en',
    th = 'th',
    vi = 'vi'

// 载入本地语言包
const zhMsg = require.context('./zh', true, /\.ts/)
const enMsg = require.context('./en', true, /\.ts/)
const thMsg = require.context('./th', true, /\.ts/)
const viMsg = require.context('./vi', true, /\.ts/)

// 创建语言包配置
const createConfig = (assets: __WebpackModuleApi.RequireContext) => {
    const config: any = {}

    assets.keys().forEach(e => {
        Object.entries(assets(e).default).forEach(e => {
            config[e[0]] = e[1]
        })
    })

    return config
}

// i18 使用的语言包配置
const messages = {
    [zh]: createConfig(zhMsg),
    [en]: createConfig(enMsg),
    [th]: createConfig(thMsg),
    [vi]: createConfig(viMsg)
}

// 创建货币标识配置
const createCurrencyConfig = (currency: string) => ({
    currency: { style: 'currency', currency }
})

// i18 货币标识
const numberFormats = {
    [zh]: createCurrencyConfig('CNY'),
    [en]: createCurrencyConfig('USD'),
    [th]: createCurrencyConfig('THB'),
    [vi]: createCurrencyConfig('VND')
}

// 默认使用的语言
const locale = zh

export default createI18n({
    locale,
    numberFormats,
    messages
})
