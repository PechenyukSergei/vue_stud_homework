import {defineStore} from "pinia";
import {reactive} from "vue";

export const useCatalogStore = defineStore('catalog', () => {
    const catalog = reactive([])

    function findById(id) {
        return catalog.find((i) => i.id === id)
    }

    return { catalog, findById }
})