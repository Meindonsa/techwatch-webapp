<script setup lang="ts">
import { useFilterStore } from '@/core/stores/filter.ts'
import ArticleITem from '@/features/home/ArticleITem.vue'
import Sources from '@/features/home/Sources.vue'
import { ref } from 'vue'
import { articleData } from '@/shared/service/ArticleData.ts'

const useFilter = useFilterStore()

const articles = ref(articleData)
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 pt-20 px-10">
    <h1 class="mb-10">Home</h1>
    <div class="flex gap-5">
      <div class="w-[70%]">
        <TransitionGroup>
          <ArticleITem v-for="article in articles" :key="article.fid" :article="article" />
        </TransitionGroup>
      </div>
      <div class="w-[30%]">
        <Sources />
      </div>
    </div>
  </main>
</template>
