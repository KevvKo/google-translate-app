<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-indigo-700 text-slate-50 p-4 flex items-center">
      <nav>
        <RouterLink class="hover:bg-indigo-600 active:bg-indigo-800 p-1 " to="/">Home</RouterLink>
      </nav>
  </header>

  <RouterView />
</template>

