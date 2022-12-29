export interface TranslateResponse {
  data: Data;
}

interface Data {
  translations: Translation[];
}

interface Translation {
  translatedText: string;
}
