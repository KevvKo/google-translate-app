import { reactive } from "vue";
import { data } from "@/assets/mockData";
import type { Language } from "@/models/models";

interface Store {
  languages: Language[];
  sourceLanguage: string;
  targetLanguage: string;

  loadLanguages: () => void;
  setSourceLanguage: (language: string) => void;
  setTargetLanguage: (language: string) => void;
}

export const store: Store = reactive({
  languages: [] as Language[],
  sourceLanguage: "German",
  targetLanguage: "English",

  loadLanguages() {
    this.languages = data.data.languages;
  },
  setSourceLanguage(language: string) {
    this.sourceLanguage = language;
  },
  setTargetLanguage(language: string) {
    this.targetLanguage = language;
  },
});
