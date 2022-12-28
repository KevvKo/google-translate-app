<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { onMounted } from "vue";
import { store } from "@/store/store";
import { LanguageService } from "@/services/LanguageService";

onMounted( async () => {
  // const result = await LanguageService().getLanguages();
  // if (result) {
  //   store.setLanguages(result.data.languages);
  // }
});
</script>

<template>
  <header class="bg-indigo-700 text-slate-50 p-5 flex items-center">
    <nav>
      <RouterLink class="hover:bg-indigo-600 active:bg-indigo-800 p-1 " to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView class="grow" />
</template>
