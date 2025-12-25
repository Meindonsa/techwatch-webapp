<script setup lang="ts">
import { useFilterStore } from '@/core/stores/filter.ts'
import ArticleITem from '@/features/home/ArticleITem.vue'
const useFilter = useFilterStore()

const articles = [
  {
    fid: 1,
    title: 'Streamlining your design process today.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, architecto iste necessitatibus nobis quae unde. Consequatur ea eum ipsum iure perspiciatis voluptates. Aliquid at dolores est exercitationem fugiat mollitia quidem.',
    date: new Date()
  },
]
</script>

<template>
  <main class="maw-w-screen w-screen min-h-screen bg-gray-900 pt-20 px-10">
    <h1>Home</h1>
    <TransitionGroup>
      <ArticleITem v-for="article in articles" :key="article.fid" :article="article" />
    </TransitionGroup>
  </main>
</template>
