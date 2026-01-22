<script setup lang="ts">
import { datePipe } from '@/shared/service/DateFormatter.ts'

defineProps(['article'])
const { formatDate } = datePipe()
</script>

<template>
  <RouterLink
    :to="'article/' + article.fid"
    class="flex flex-col bg-neutral-primary-soft p-2 mb-3 border border-gray-500 transition ease-in-out duration-300 hover:border-gray-50 rounded-base shadow-xs cursor-pointer"
  >
    <div class="flex flex-col justify-between md:p-4 leading-normal">
      <h5 class="mb-2 text-md font-bold text-indigo-500">
        {{ article.title }}
      </h5>
      <div class="flex justify-between w-full text-sm text-gray-500">
        <span>Depuis : {{ article.source.name }} {{ ' par: ' + (article.author || "Inconnu") }}</span>
        <span>{{ formatDate(article.fetchedDate, 'mediumDate') }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
