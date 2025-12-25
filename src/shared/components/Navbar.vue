<script setup lang="ts">
import { ref } from 'vue'
import { SourceFilters } from '@/shared/service/NavbarData.ts'
import { useFilterStore } from '@/core/stores/filter.ts'

const filter = ref('ALL')
const filters = ref(SourceFilters)
const useFilter = useFilterStore();

const isActive = (name: string) => {
  const activated = filter.value == name
  return activated ? 'text-white underline underline-offset-8' : 'text-gray-500'
}

const onFilter = (name: string) => {
  if (name == filter.value) return
  filter.value = name;
  useFilter.setFilter(name);
}

</script>

<template>
  <nav class="bg-gray-950 fixed w-full z-20 top-0 start-0 border-b border-b-gray-900">
    <div class="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
        <span class="self-center text-xl text-white text-heading font-semibold whitespace-nowrap">
          Flowbite
        </span>
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary"
        >
          <li v-for="item of filters">
            <a
              @click="onFilter(item.name)"
              :class="isActive(item.name)"
              class="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0 cursor-pointer"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
