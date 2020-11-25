import { local } from '@/utils/storage'

const historyStorage = local.get('history')

export const history: Map<string, number> = new Map(historyStorage || [])

let counter = history.size ? Math.max(...history.values()) : 6

export const addHistory = (path: string, cascading?: number) => {
    if (!history.get(path)) {
        counter++
        history.set(path, cascading || counter)

        local.save({
            history: [ ...history ]
        })
    }
}
