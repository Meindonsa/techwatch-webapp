<script setup lang="ts">
defineProps({
  count: {
    type: Number,
    default: 5,
  },
})
</script>

<template>
  <div class="skeleton-list">
    <div v-for="i in count" :key="i" class="skeleton-item p-2 mb-3 border border-gray-500">
      <div class="skeleton-content">
        <div class="skeleton-title shimmer text-md" />
        <div class="skeleton-title shimmer text-md" />
        <div class="flex justify-between w-full mt-3">
          <div class="skeleton-subtitle shimmer" />
          <div class="skeleton-text shimmer" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.skeleton-item {
  display: flex;
  gap: 12px;
}

.skeleton-thumbnail {
  width: 80px;
  height: 80px;
  border-radius: 8px;
  flex-shrink: 0;
}

.skeleton-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
}

.skeleton-title {
  height: 10px;
  width: 100%;
  border-radius: 4px;
}

.skeleton-subtitle {
  height: 12px;
  width: 40%;
  border-radius: 4px;
}

.skeleton-text {
  height: 12px;
  width: 10%;
  border-radius: 4px;
}

/* Shimmer */
.shimmer {
  background: linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>
