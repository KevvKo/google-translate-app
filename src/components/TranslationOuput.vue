<script setup lang="ts">
import SelectLanguage from './SelectLanguage.vue';
import { store } from '@/store/store';
</script>

<template>
  <div class="">
    <SelectLanguage
      name="sourceLanguage"
      :languages="store.languages"
      :sourceLanguage="store.sourceLanguage"
    />
    <div class=" h-3/5 p-3 rounded border border-gray-200"></div>
  </div>
</template>
