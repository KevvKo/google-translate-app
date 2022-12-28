import { reactive } from "vue";
import { data } from "@/assets/mockData";
import type { Language } from "@/models/models";

interface Store {
  languages: Language[];
  sourceLanguage: string;
  targetLanguage: string;

  setSourceLanguage: (language: string) => void;
  setTargetLanguage: (language: string) => void;
  setLanguages: (languages: Language[]) => void;
}

export const store: Store = reactive({
  languages: [] as Language[],
  sourceLanguage: "Detect Language",
  targetLanguage: "English",

  setSourceLanguage(language: string) {
    this.sourceLanguage = language;
  },
  setTargetLanguage(language: string) {
    this.targetLanguage = language;
  },
  setLanguages(languages: Language[]) {
    this.languages = languages;
  },
});
