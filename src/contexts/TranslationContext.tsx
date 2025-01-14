import { defaultDictionary, Dictionary } from "../types/dictionary";
import { createContext, useContext } from "react";

export const TranslationContext = createContext<Dictionary>(defaultDictionary);

export const useTranslation = () => useContext(TranslationContext);
