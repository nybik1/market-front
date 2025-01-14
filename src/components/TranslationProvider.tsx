"use client";

import { ReactNode } from "react";
import { TranslationContext } from "../contexts/TranslationContext";
import { Dictionary } from "../types/dictionary";

export default function TranslationProvider({
  dictionary,
  children,
}: {
  dictionary: Dictionary;
  children: ReactNode;
}) {
  return (
    <TranslationContext.Provider value={dictionary}>
      {children}
    </TranslationContext.Provider>
  );
}
