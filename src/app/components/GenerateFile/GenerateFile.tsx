"use client";
import Link from "next/link";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import * as stylex from "@stylexjs/stylex";

const pulse = stylex.keyframes({
  "0%": { borderColor: "#fef08a", color: "#fef08a" },
  "50%": { borderColor: "rgba(0, 255, 255, 0)", color: "rgba(0, 255, 255, 0)" },
  "100%": { borderColor: "white" },
});

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
    ":hover": {
      animationName: pulse,
      animationDuration: "2s",
      animationIterationCount: "infinite",
    },
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
