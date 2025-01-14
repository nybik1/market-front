import type { ReactNode } from "react";

export type LanguageParams = Promise<{ lang: "en" | "uk" | "ru" }>;

export interface RootLayoutProps {
  children: ReactNode;
  params: LanguageParams;
}
