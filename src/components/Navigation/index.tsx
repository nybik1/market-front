import React from "react";
import { NavigationDict } from "@/types/dictionary";
import { navigation } from "@/constants/navigation";
import Link from "next/link";
import styles from "./index.module.scss";
import { useTranslation } from "@/contexts/TranslationContext";
const Navigation = () => {
  const dict = useTranslation();
  return (
    <nav className={styles.root}>
      {navigation.map((item) => (
        <Link className={styles.link} href={item.link} key={item.key}>
          {dict.navigation[item.key as NavigationDict]}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
