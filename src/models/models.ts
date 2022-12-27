export interface Language {
  language: string;
}

export interface Data {
  languages: Language[];
}

export interface RootObject {
  data: Data;
};