<script setup lang="ts">
import type { PropType } from "vue";
import type { Language } from "@/models/models";
import { store } from "@/store/store";

const props = defineProps<{
  languages: Language[];
  name: string;
  selectedValue?: string;
}>();
</script>

<template>
  <select class="rounded py-3 px-2" name="sourceLanguage">
    <option value="detect">Detect language</option>
    <option
      v-for="(languageItem, index) in props.languages"
      :selected="languageItem.language === props.selectedValue"
      value="languageItem.language"
      v-bind:key="index"
    >
      {{ languageItem.language }}
    </option>
  </select>
</template>
