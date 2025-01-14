import "server-only";

const dictionaries = {
  en: () => import("./en.json").then((module) => module.default),
  uk: () => import("./uk.json").then((module) => module.default),
  ru: () => import("./ru.json").then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) =>
  dictionaries[locale]();
