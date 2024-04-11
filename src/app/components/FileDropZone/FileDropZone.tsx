import React from "react";
import styles from "~/app/index.module.css";
import { useDropzone } from "react-dropzone";
import { DropzoneFile } from "~/types/Dropzone/DropzoneFile";

export default function FileDropZone() {
  const onDrop = React.useCallback((acceptedFiles: DropzoneFile[]) => {
    console.log(acceptedFiles);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "application/json": [".json"] },
  });

  return (
    <div {...getRootProps()}>
      <div>
        <input {...getInputProps()} />
        <button className={styles.dropzoneContainer}>Drop / select file</button>
      </div>
    </div>
  );
}
