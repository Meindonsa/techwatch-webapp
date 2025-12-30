<script setup lang="ts">
import { useFilterStore } from '@/core/stores/filter.ts'
import ArticleITem from '@/features/home/ArticleITem.vue'
import Sources from '@/features/home/Sources.vue'
import { onMounted, ref } from 'vue'
import Paginator from '@/shared/components/Paginator.vue'
import { ArticleService } from '@/shared/api/ArticleService.ts'
import type { ArticlesView } from '@meindonsa/chat-api/models'
import { useArticleStore } from '@/core/stores/article.ts'

const loading = ref(false)
const useFilter = useFilterStore()
const useArticle = useArticleStore()
const articles = ref<ArticlesView[]>([])
const pagination = ref({
  total: 0,
  page: 0,
  size: 5,
})
const retrieveArticles = async (pageIndex = 0) => {
  loading.value = true
  try {
    const body = { size: 5, index: pageIndex }
    const { data } = await ArticleService.retrieveArticles(body)
    if (data) {
      articles.value = data.objects
      pagination.value.total = data.total
      pagination.value.page = pageIndex
    }
  } catch (e) {
    console.error('Erreur lors de la récupération :', e)
  } finally {
    loading.value = false
  }
}

const handlePageChange = (newPage: number) => {
  retrieveArticles(newPage)
}

onMounted(() => {
  retrieveArticles()
})
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 py-20 px-10">
    <h1 class="text-2xl font-bold text-white mb-10">Accueil</h1>
    <div class="flex gap-5">
      <div class="w-[70%]">
        <TransitionGroup>
          <ArticleITem v-for="article in articles" :key="article.fid" :article="article" />
        </TransitionGroup>
        <Paginator
          :total-items="pagination.total"
          :items-per-page="pagination.size"
          :current-page="pagination.page"
          @change-page="handlePageChange"

        />
      </div>
      <div class="w-[30%]">
        <Sources />
      </div>
    </div>
  </main>
</template>
