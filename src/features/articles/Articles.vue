<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { computed, ref, watch } from 'vue'
import { useFilterStore } from '@/core/stores/filter.ts'
import type { ArticlesView } from '@meindonsa/techwatch-api/models'
import { ArticleService } from '@/shared/api/ArticleService.ts'
import ArticleITem from '@/features/home/ArticleITem.vue'
import Paginator from '@/shared/components/Paginator.vue'
import Skeleton from '@/shared/components/Skeleton.vue'

const route = useRoute()
const router = useRouter()
const currentPage = computed(() => Number(route.query.page) || 1)

const loading = ref(false)
const useFilter = useFilterStore()
const searchValue = computed(() => useFilter.searchValue)
const articles = ref<ArticlesView[]>([])
const pagination = ref({ total: 0, page: 0, size: 5 })

const retrieveArticles = async (pageIndex = 0) => {
  loading.value = true
  try {
    const body = { size: 5, index: pageIndex, searchKey: searchValue.value }
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
  goToPage(newPage + 1)
}

const goToPage = (page: number) => {
  router.push({ path: '/articles', query: { page } })
}

watch(
  currentPage,
  (newPage) => {
    console.log('Chargement page', newPage)
    retrieveArticles(newPage - 1)
  },
  { immediate: true },
)
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 py-20 px-10">
    <h1 class="text-2xl font-bold text-white mb-10">Accueil {{ searchValue }}</h1>
    <div class="flex gap-5">
      <div class="w-full">
        <Skeleton v-if="loading" :count="5" />
        <TransitionGroup v-if="!loading">
          <ArticleITem v-for="article in articles" :key="article?.fid" :article="article" />
        </TransitionGroup>
        <Paginator
          :total-items="pagination.total"
          :items-per-page="pagination.size"
          :current-page="pagination.page"
          @change-page="handlePageChange"
        />
        <div class="text-center py-5"></div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
