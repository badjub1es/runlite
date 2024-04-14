import React from "react";
import { useDropzone } from "react-dropzone";
import { type DropzoneFile } from "~/types/Dropzone/DropzoneFile";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import * as stylex from "@stylexjs/stylex";

const pulse = stylex.keyframes({
  "0%": { borderColor: "#fef08a", color: "#fef08a" },
  "50%": { borderColor: "rgba(0, 255, 255, 0)", color: "rgba(0, 255, 255, 0)" },
  "100%": { borderColor: "white" },
});

const styles = stylex.create({
  fileDropZone: {
    padding: "10px",
    width: "fit-content",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: "2px dashed white",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
    ":hover": {
      animationName: pulse,
      animationDuration: "2s",
      animationIterationCount: "infinite",
    },
  },
});

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
        <button {...stylex.props(styles.fileDropZone)}>
          Drop / select file <UploadFileIcon />
        </button>
      </div>
    </div>
  );
}
