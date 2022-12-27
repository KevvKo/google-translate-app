<script setup lang="ts">
import TranslationInput from '@/components/TranslationInput.vue';
import TranslationOuput from '@/components/TranslationOuput.vue';
import ToolbarComponent from '@/components/ToolbarComponent.vue';
</script>

<template>
  <main class="h-full p-5 flex flex-col">
    <ToolbarComponent />
    <div class="flex">
      <TranslationInput class="w-1/2"/>
      <TranslationOuput class="w-1/2"/>
    </div>
  </main>
</template>
