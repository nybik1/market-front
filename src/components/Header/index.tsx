"use client";
import React from "react";
import { LanguageCodeType } from "@/types/general";
import { useRouter, useParams } from "next/navigation";
import styles from "./index.module.scss";

import { useTranslation } from "@/contexts/TranslationContext";
import Navigation from "../Navigation";
import LocaleSwitcher from "../LocaleSwitcher";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const router = useRouter();
  const params = useParams();
  const lang = params.lang as LanguageCodeType;
  const dict = useTranslation();
  const auth = useSelector((state: RootState) => state.authReducer.auth);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <Navigation />
      <LocaleSwitcher />
    </header>
  );
};

export default Header;
