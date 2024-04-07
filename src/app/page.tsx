"use client";

import styles from "./index.module.css";
import React from "react";
import { useDropzone } from "react-dropzone";

export default function Home() {
  const onDrop = React.useCallback((acceptedFiles) => {
    // Do something with the files
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Run<span className={styles.pinkSpan}>lite</span>
        </h1>
        <div {...getRootProps()}>
          <div>
            <input {...getInputProps()} />
            <div className={styles.dropzone}>
              <div className={styles.dropzoneContainer}>Drop here!</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
