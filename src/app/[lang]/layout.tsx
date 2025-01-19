import { Roboto } from "next/font/google";
import "../globals.css";
import TranslationProvider from "@/components/TranslationProvider";
import { RootLayoutProps } from "@/types/core.types";
import { getDictionary } from "../../../dictionaries/dictionaries";
import Header from "@/components/Header";
import StoreProvider from "../StoreProvider";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${roboto.className}`}>
        <StoreProvider>
          <TranslationProvider dictionary={dict}>
            <Header />
            {children}
            <footer>footer</footer>
          </TranslationProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
