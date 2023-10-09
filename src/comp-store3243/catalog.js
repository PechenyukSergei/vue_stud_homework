import {reactive} from "vue";

export const catalog = reactive([])

export function findById(id) {
    return catalog.find((i) => i.id === id)
}