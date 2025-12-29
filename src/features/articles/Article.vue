<script setup lang="ts">
import { useRouter } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import { useArticleStore } from '@/core/stores/article.ts'

const router = useRouter()
const useArticle = useArticleStore()
const article = computed(() => useArticle.data)
const fid = ref(router.currentRoute.value.params.fid as string)

onMounted(() => {
  useArticle.setSelected(fid.value)
})
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 pt-20 px-10">
    <h1>Article</h1>
    {{ article }}
  </main>
</template>

<style scoped></style>
