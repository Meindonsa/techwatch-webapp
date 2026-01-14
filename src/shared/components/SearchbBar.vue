<script setup lang="ts">
import { useFilterStore } from '@/core/stores/filter.ts'
import { ref } from 'vue'
const useFilter = useFilterStore()

const searchKey = ref('')

const onSearching = (): void => {
  useFilter.search(searchKey.value.trim())
}

</script>

<template>
  <input
    type="text"
    v-model="searchKey"
    @input.prevent="onSearching"
    class="w-100 px-3 py-2 border border-white text-heading text-sm rounded-sm placeholder:text-gray-500 text-white"
    placeholder="Search"
  />
</template>

<style scoped></style>
