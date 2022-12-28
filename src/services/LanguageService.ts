export const LanguageService = {

  getLanguages: async () => {
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
  detectLanguage: async (content: string) => {
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
    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2/detect",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  },
  translate: async (source: string, target: string, content: string) => {
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

    fetch(
      "https://google-translate1.p.rapidapi.com/language/translate/v2",
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  },
};
