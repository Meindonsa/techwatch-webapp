import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { SourceFilters } from '@/shared/service/NavbarData.ts'

export const useFilterStore = defineStore('filter', () => {
  const filter = ref('ALL');
  const filters = ref(SourceFilters);
  const filterValue = computed(() => filter.value);

  const setFilter = (name: string) => {
    filter.value = name
  }

  return { filters, filterValue,  setFilter }
})
