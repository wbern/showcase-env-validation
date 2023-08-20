"use client";

import { useEffect, useState } from "react";
import styles from "../page.module.css";

export const ClientSideVars = () => {
  const [processVariables, setProcessVariables] = useState<{
    [key: string]: string | undefined;
  }>({});

  useEffect(() => {
    setProcessVariables({
      // Here we specify the variable we want to set
      // Next.js requires you to specifically type in
      // the variables you need to utilize
      NEXT_PUBLIC_KEY: process.env.NEXT_PUBLIC_KEY,
    });
  }, [setProcessVariables]);

  return (
    <div className={styles.description}>
      {Object.keys(processVariables).map((key) => (
        <div key={key}>
          {key}: {processVariables[key]}
        </div>
      ))}
    </div>
  );
};
