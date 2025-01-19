"use client";
import React, { useState } from "react";
import ArrowDownSVG from "../../assets/svg/arrowDown.svg";
import { LanguageCodeType, languages } from "@/types/general";
import { useRouter, useParams } from "next/navigation";
import styles from "./header.module.scss";
import cs from "classnames";

const LocaleSwitcher = () => {
  const router = useRouter();
  const params = useParams();
  const [isOpen, setOpen] = useState(false);
  const handleOpen = () => setOpen(!isOpen);
  const lang = params.lang as LanguageCodeType;

  const handleChangeLanguage = (code: LanguageCodeType) => {
    if (lang === code) return;
    router.replace(`/${code}`);
  };
  return (
    <div className={styles.languagesWrapper}>
      <div
        onClick={handleOpen}
        className={cs(styles.arrow, {
          [styles.arrowOpen]: isOpen,
        })}
      >
        <ArrowDownSVG />
      </div>
      <div
        className={cs(styles.languagesDropdown, {
          [styles.open]: isOpen,
        })}
      >
        {languages.map((language) => (
          <button
            key={language.code}
            onClick={() => handleChangeLanguage(language.code)}
          >
            {language.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LocaleSwitcher;
