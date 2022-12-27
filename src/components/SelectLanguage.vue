<script setup lang="ts">
import type { PropType } from "vue";
import type { Language } from "@/models/models";
import { store } from "@/store/store";

defineProps({
  languages: Array as PropType<Language[]>,
  sourceLanguage: String as PropType<string>,
  name: String as PropType<string>,
});
</script>

<template>
  <select class="rounded py-3 px-2" name="sourceLanguage">
    <option
      v-for="(languageItem, index) in languages"
      :selected="languageItem.language === sourceLanguage"
      value="languageItem.language"
      v-bind:key="index"
    >
      {{ languageItem.language }}
    </option>
  </select>
</template>
