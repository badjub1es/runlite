"use client";

import React from "react";
import styles from "./index.module.css";
import FileDropZone from "./components/FileDropZone/FileDropZone";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          run<span className={styles.yellowSpan}>lite</span>
        </h1>
        <FileDropZone />
      </div>
    </main>
  );
}
