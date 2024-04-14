import Link from "next/link";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  fileContainer: {
    padding: "10px",
    width: "fit-content",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: "2px solid white",
    color: "white",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5px",
  },
});

export default function GenerateFile() {
  return (
    <Link href="/generate-file">
      <button {...stylex.props(styles.fileContainer)}>
        Generate new file <AddIcon />
      </button>
    </Link>
  );
}
