<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useArticleStore } from '@/core/stores/article.ts'
import Sources from '@/features/home/Sources.vue'
import { datePipe } from '@/shared/service/DateFormatter.ts'

const router = useRouter()
const { formatDate } = datePipe()
const useArticle = useArticleStore()
const article = computed(() => useArticle.data)
const fid = ref(router.currentRoute.value.params.fid as string)

onMounted(() => {
  useArticle.setSelected(fid.value)
})
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 pt-20 px-10">
    <div class="flex gap-5">
      <div class="w-[70%]">
        <h1 class="text-xl text-indigo-500 font-bold mb-5">{{ article.title }}</h1>
        <div class="text-white mb-5" v-html="article.content"></div>
        <div class="flex justify-between text-sm italic font-thin text-gray-100">
          <span>
            Source :
            <a href="https://google.com" target="_blank" class="underline underline-offset-4">
              Google.com
            </a>
            - {{ article.author }}
          </span>
          <span>{{ formatDate(article.fetchedDate, 'medium') }}</span>
        </div>
      </div>
      <div class="w-[30%]">
        <Sources />
      </div>
    </div>
  </main>
</template>

<style scoped></style>
