<script setup lang="ts">
import type { Language } from "@/models/GetLanguagesModels";
import { defineEmits } from "vue";

const props = defineProps<{
  languages: Language[];
  name: string;
  selectedValue?: string;
}>();

const emit = defineEmits<{
  (e: "change", event: Event): void;
}>();

const handleChange = (event: Event) => {
  emit("change", event);
};
</script>

<template>
  <select
    class="rounded py-3 px-2"
    name="sourceLanguage"
    @change="handleChange"
  >
    <option value="detect">Detect language</option>
    <option
      v-for="(languageItem, index) in props.languages"
      :selected="languageItem.language === props.selectedValue"
      :value="languageItem.language"
      v-bind:key="index"
    >
      {{ languageItem.language }}
    </option>
  </select>
</template>
