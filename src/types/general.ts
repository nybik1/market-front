export type LanguageCodeType = "en" | "uk" | "ru";

export type LanguageType = {
  code: LanguageCodeType;
  label: string;
};

export const languages: LanguageType[] = [
  { code: "uk", label: "UA" },
  { code: "en", label: "EN" },
  { code: "ru", label: "RU" },
];
