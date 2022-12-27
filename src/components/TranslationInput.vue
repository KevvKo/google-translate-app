<script setup lang="ts">
import SelectLanguage from './SelectLanguage.vue';
import { store } from '@/store/store';
</script>

<template>
  <div>
    <SelectLanguage
      name="sourceLanguage"
      :languages="store.languages"
      :sourceLanguage="store.sourceLanguage"
    />
    <textarea
      class="h-3/5 w-full p-3 block border border-gray-200 hover:border-indigo-600 focus:border-indigo-700"
      placeholder="Please enter the desired content which is to be translated "
    />
  </div>
</template>
