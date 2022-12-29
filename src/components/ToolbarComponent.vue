<script setup lang="ts">
import { ref } from "vue";
import { store } from "@/store/store";

import SelectLanguage from "@/components/SelectLanguage.vue";
import SwitchIcon from "@/components/icons/SwitchIcon.vue";

const isRotated = ref(false);

function handleClickSwitch() {
  isRotated.value = !isRotated.value;

  const sourceLanguage = store.sourceLanguage;
  const targetLanguage = store.targetLanguage;

  store.setSourceLanguage(targetLanguage);
  store.setTargetLanguage(sourceLanguage);
}

const handleChangeSourceLanguage = (event: Event) => {
  const element = event.target as HTMLInputElement;
  const value = element.value;

  if (value) {
    store.setSourceLanguage(value);
  }
};

const handleChangeTargetLanguage = (event: Event) => {
  const element = event.target as HTMLInputElement;
  const value = element.value;

  if (value) {
    store.setTargetLanguage(value);
  }
};
</script>

<template>
  <div class="flex items-center justify-between">
    <SelectLanguage
      name="sourceLanguage"
      :languages="store.languages"
      @change="handleChangeSourceLanguage"
    />
    <div>
      <button
        class="ease-in duration-100 hover:bg-gray-200 active:bg-gray-300 rounded-full p-2"
        :class="{ 'rotate-180': isRotated }"
        @change="handleClickSwitch"
      >
        <SwitchIcon />
      </button>
    </div>
    <SelectLanguage
      name="targetLanguage"
      :languages="store.languages"
      :selectedValue="store.targetLanguage"
      @change="handleChangeTargetLanguage"
    />
  </div>
</template>
