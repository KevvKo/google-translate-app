<script setup lang="ts">
import { store } from "@/store/store";
import { LanguageService } from "@/services/LanguageService";

const handleInput = async (event: Event) => {
  const element = event.target as HTMLInputElement;
  const value = element.value;
  let sourceLanguage = store.sourceLanguage;
  const targetLanguage = store.targetLanguage;

  if (sourceLanguage === "detect" && value) {
    const detectResult = await LanguageService.detectLanguage(value);

    if (detectResult && detectResult?.data) {
      sourceLanguage = detectResult.data.detections[0].language;
      store.setSourceLanguage(sourceLanguage);
    }
  }
  console.log(sourceLanguage);

  const result = await LanguageService.translate(
    sourceLanguage,
    targetLanguage,
    value
  );

  if (result && result?.data) {
    store.setTranslation(result.data.translations[0].translatedText);
  }
};
</script>

<template>
  <section>
    <textarea
      class="h-3/5 w-full p-3 resize-none text-slate-500 block border border-gray-200 hover:border-indigo-600 focus:border-indigo-700"
      placeholder="Please enter the desired content which is to be translated "
      @input="handleInput"
    />
  </section>
</template>
