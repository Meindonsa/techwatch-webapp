<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { SourceService } from '@/shared/api/SourceService.ts'
import type { SourcesView } from '@meindonsa/chat-api/models'

const loading = ref(false)
const sources = ref<SourcesView[]>([])
const retrieveSources = async () => {
  loading.value = true
  const body = {
    size: 10,
    index: 0,
  }
  const { data } = await SourceService.retrieveSources(body)
  if (data) sources.value = data.objects
  loading.value = false
}

onMounted(() => {
  retrieveSources()
})
</script>

<template>
  <div
    class="w-full max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-base shadow-xs"
  >
    <h5 class="mb-4 text-xl font-semibold leading-none text-heading text-white">Sources</h5>
    <div class="flow-root">
      <div class="text-center text-gray-700" v-if="loading">
        Chargement ...
      </div>
      <TransitionGroup tag="ul" mode="easy-in-out" role="list" class="divide-default text-gray-300">
        <li
          v-for="source of sources"
          :key="source.fid"
          class="text-sm text-body truncate mb-2 hover:text-indigo-500 transition ease-in-out duration-300"
        >
          <a
            :href="source.url"
            target="_blank"
            class="cursor-pointer hover:underline hover:underline-offset-4"
          >
            {{ source.name }}
          </a>
        </li>
      </TransitionGroup>
    </div>
  </div>
</template>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
