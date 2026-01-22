<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { datePipe } from '@/shared/service/DateFormatter.ts'
import { ArticleService } from '@/shared/api/ArticleService.ts'
import type { ArticleView } from '@meindonsa/techwatch-api/models'

const loading = ref(false)
const router = useRouter()
const article = ref<ArticleView | any>(null)
const { formatDate } = datePipe()
const fid = ref(router.currentRoute.value.params.fid as string)

const retrieveArticle = async () => {
  loading.value = true
  const { data } = await ArticleService.retrieveArticle(fid.value)
  if (data) {
    article.value = data
  }
  loading.value = false
}
onMounted(() => {
  if (fid.value) retrieveArticle()
})
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 py-20 px-10">
    <div class="flex justify-center gap-5">
      <div class="w-[70%]">
        <h1 class="text-2xl text-indigo-500 font-bold mb-5">{{ article?.title }}</h1>
        <div class="mb-10 prose prose-invert prose-indigo" v-html="article?.content"></div>
        <div class="flex justify-between text-sm italic font-thin text-gray-100">
          <span>
            Source :
            <a :href="article?.url" target="_blank" class="underline underline-offset-4">
              {{ article?.source?.name }}
            </a>
            - {{ article?.author || 'Inconnu' }}
          </span>
          <span>{{ formatDate(article?.fetchedDate, 'medium') }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
