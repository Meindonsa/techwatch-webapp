<script setup lang="ts">
interface Props {
  label: string
  disabled?: boolean
  severity?: 'primary' | 'secondary'
}
withDefaults(defineProps<Props>(), {
  label: 'Valider',
  disabled: false,
})

const emit = defineEmits(['onclick'])

const onclick = () => {
  emit('onclick')
}
function getSeverity(data: any | null) {
  if (data == null || data.trim().length == 0) return primary
  switch (data.trim()) {
    case 'primary':
      return primary
    case 'secondary':
      return secondary
  }
}
const primary = 'bg-indigo-500 hover:bg-indigo-600 disabled:bg-indigo-300'
const secondary = 'bg-gray-800 hover:bg-gray-700 disabled:bg-gray-500'
</script>

<template>
  <button
    type="button"
    :disabled="disabled"
    :class="getSeverity(severity)"
    @click="onclick"
    class="text-white px-4 py-2 rounded-sm cursor-pointer"
  >
    {{ label }}
  </button>
</template>

<style scoped></style>
