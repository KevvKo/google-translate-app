import type { TranslateResponse } from "@/models/TranslateModels";
import type { DetectionResponse } from "@/models/DetectLanguageModels";
import type { GetLanguagesResponse } from "@/models/GetLanguagesModels";

export const LanguageService = {
  getLanguages: async (): Promise<GetLanguagesResponse> => {
    const options = {
      method: "GET",
      headers: {
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
    };
    return await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
  detectLanguage: async (content: string): Promise<DetectionResponse> => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", content);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };
    return await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
  translate: async (
    source: string,
    target: string,
    content: string
  ): Promise<TranslateResponse> => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("source", source);
    encodedParams.append("target", target);
    encodedParams.append("q", content);

    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      body: encodedParams,
    };

    return await fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err));
  },
};
