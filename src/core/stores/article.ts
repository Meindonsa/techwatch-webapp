import { defineStore } from 'pinia'
import { computed, type ComputedRef, type Ref, ref } from 'vue'
import { articleData } from '@/shared/service/ArticleData.ts'

export const useArticleStore = defineStore('article', () => {
  const articles: Ref<any[]> = ref([])
  const selectedArticleId: Ref<string | null> = ref(null)
  const data = computed(() => {
    console.log(articles.value)
    const a = articles.value.find((item: any): boolean => item.fid == selectedArticleId.value)
    console.log(a);
    return a
  })

  const setAll = (articles: any): void => {
    articles.value = articles
  }

  const setSelected = (fid: string): void => {
    selectedArticleId.value = fid
    console.log(selectedArticleId.value)
    console.log(articles.value)
    const item = articles.value.find((item: any): boolean => item.fid == selectedArticleId.value)
    console.log(item)
  }

  return { data, articles, selectedArticleId, setSelected, setAll }
})
