import { reactive } from "vue";
import { data } from "@/assets/mockData";
import type { Language } from "@/models/GetLanguagesModels";

interface Store {
  languages: Language[];
  sourceLanguage: string;
  targetLanguage: string;
  translations: string;

  setSourceLanguage: (language: string) => void;
  setTargetLanguage: (language: string) => void;
  setLanguages: (languages: Language[]) => void;
  setTranslation: (content: string) => void;
}

export const store: Store = reactive({
  languages: [] as Language[],
  sourceLanguage: "detect",
  targetLanguage: "en",
  translations: "Translation",

  setSourceLanguage(language: string) {
    this.sourceLanguage = language;
  },
  setTargetLanguage(language: string) {
    this.targetLanguage = language;
  },
  setLanguages(languages: Language[]) {
    this.languages = languages;
  },
  setTranslation(translations: string) {
    this.translations = translations;
  },
});
