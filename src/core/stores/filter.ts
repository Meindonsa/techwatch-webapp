import { defineStore } from 'pinia'
import { computed, type Ref, ref } from 'vue'
import { SourceFilters } from '@/shared/service/NavbarData.ts'

export const useFilterStore = defineStore('filter', () => {
  const filter: Ref<string> = ref('ALL');
  const searchKey: Ref<string> = ref('');
  const filters = ref(SourceFilters);
  const filterValue = computed(() => filter.value);
  const searchValue = computed(() => searchKey.value);

  const setFilter = (name: string): void => {
    filter.value = name
  }

  const search = (key: string): void => {
    searchKey.value = key
  }

  return { filters, filterValue, searchValue, search, setFilter }
})
