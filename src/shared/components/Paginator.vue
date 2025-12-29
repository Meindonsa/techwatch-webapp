<script setup lang="ts"></script>

<template>
  <div class="flex sm:items-center md:justify-end">
    <nav aria-label="Pagination" class="isolate inline-flex -space-x-px rounded-md shadow-xs">
      <a
        href="#"
        class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span class="sr-only">Previous</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          data-slot="icon"
          aria-hidden="true"
          class="size-5"
        >
          <path
            d="M11.78 5.22a.75.75 0 0 1 0 1.06L8.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06l-4.25-4.25a.75.75 0 0 1 0-1.06l4.25-4.25a.75.75 0 0 1 1.06 0Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </svg>
      </a>
      <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" -->
      <a
        href="#"
        aria-current="page"
        class="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >1</a
      >
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >2</a
      >
      <a
        href="#"
        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >3</a
      >
      <span
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 focus:outline-offset-0"
        >...</span
      >
      <a
        href="#"
        class="relative hidden items-center px-4 py-2 text-sm font-semibold text-white inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
        >8</a
      >
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >9</a
      >
      <a
        href="#"
        class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-white inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        >10</a
      >
      <a
        href="#"
        class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
      >
        <span class="sr-only">Next</span>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          data-slot="icon"
          aria-hidden="true"
          class="size-5"
        >
          <path
            d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
            clip-rule="evenodd"
            fill-rule="evenodd"
          />
        </svg>
      </a>
    </nav>
  </div>
</template>

<style scoped></style>
