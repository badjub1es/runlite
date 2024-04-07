"use client";

import React from "react";
import styles from "./index.module.css";
import { useDropzone } from "react-dropzone";

interface DropzoneFile extends File {
  size: number;
  path?: string;
}

export default function Home() {
  const onDrop = React.useCallback((acceptedFiles: DropzoneFile[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          run<span className={styles.yellowSpan}>lite</span>
        </h1>
        <div {...getRootProps()}>
          <div>
            <input {...getInputProps()} />
              <div className={styles.dropzoneContainer}>Drop or select file</div>
          </div>
        </div>
      </div>
    </main>
  );
}
