"use client";

import React from "react";
import Stack from "../components/Stack/Stack";
import styles from "./index.module.css";
import FileDropZone from "../components/FileDropZone/FileDropZone";
import GenerateFile from "../components/GenerateFile/GenerateFile";
import { NotificationProvider } from "~/providers/NotificationProvider";

export default function Home() {
  return (
    <main className={styles.main}>
      <NotificationProvider>
        <div className={styles.container}>
          <h1 className={styles.title}>
            run<span className={styles.yellowSpan}>lite</span>
          </h1>
          <Stack direction="row" spacing={10}>
            <FileDropZone />
            <GenerateFile />
          </Stack>
        </div>
      </NotificationProvider>
    </main>
  );
}
