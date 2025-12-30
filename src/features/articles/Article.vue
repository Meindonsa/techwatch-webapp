<script setup lang="ts">
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import Sources from '@/features/home/Sources.vue'
import { datePipe } from '@/shared/service/DateFormatter.ts'
import type { ArticleView } from '@meindonsa/chat-api/models'
import { ArticleService } from '@/shared/api/ArticleService.ts'

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
    console.log(data)
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
        <div class="text-white mb-10" v-html="article?.content"></div>
        <div class="flex justify-between text-sm italic font-thin text-gray-100">
          <span>
            Source :
            <a :href="article?.url" target="_blank" class="underline underline-offset-4">
              {{ article?.source?.name }}
            </a>
            - {{ article?.author }}
          </span>
          <span>{{ formatDate(article?.fetchedDate, 'medium') }}</span>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
:deep(h2) {
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: #6366f1; /* Indigo-500 */
}

:deep(p) {
  margin-bottom: 1.25rem;
  line-height: 1.75;
}

:deep(img) {
  border-radius: 0.5rem;
  margin: 2rem auto;
  max-width: 100%;
  height: auto;
}

:deep(a) {
  color: #818cf8;
  text-decoration: underline;
}

</style>
