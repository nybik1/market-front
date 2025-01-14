"use client";
import React from "react";
import { LanguageCodeType, languages } from "@/types/general";
import { useRouter, useParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as LanguageCodeType;

  const handleChangeLanguage = (code: LanguageCodeType) => {
    if (lang === code) return;
    router.replace(`/${code}`);
  };
  return (
    <header>
      <h1>
        Header
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleChangeLanguage(language.code)}
          >
            {language.label}
          </button>
        ))}
      </h1>
    </header>
  );
};

export default Header;
