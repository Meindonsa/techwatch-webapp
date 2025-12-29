<script setup lang="ts">
import { datePipe } from '@/shared/service/DateFormatter.ts'

defineProps(['article'])
const { formatDate } = datePipe()
</script>

<template>
  <RouterLink
    :to="'article/' + article.fid"
    :state="{ article: article }"
    class="flex flex-col items-center bg-neutral-primary-soft p-3 mb-3 border border-gray-500 hover:border-gray-50 rounded-base shadow-xs cursor-pointer"
  >
    <div class="flex flex-col justify-between md:p-4 leading-normal">
      <h5 class="mb-2 text-md font-bold text-indigo-500">
        {{ article.title }}
      </h5>
      <p class="mb-6 text-sm text-gray-200">
        In today’s fast-paced digital landscape, fostering seamless collaboration among Developers
        and IT Operations.
      </p>
      <div class="flex justify-between w-full text-sm text-gray-500">
        <span>{{ 'Par: ' + article.author }}</span>
        <span>{{ formatDate(article.fetchedDate, 'mediumDate') }}</span>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped></style>
