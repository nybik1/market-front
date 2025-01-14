"use client";

import styles from "../page.module.css";
import Button from "@/components/common/Button";
import { useTranslation } from "@/contexts/TranslationContext";

export default function Home() {
  const dict = useTranslation();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Button>
          <p>{dict.hello}</p>
        </Button>
      </main>
    </div>
  );
}
