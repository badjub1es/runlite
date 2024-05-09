import { ThemeColors } from "~/types/Colors/ThemeColors";
import Link from "next/link";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import * as stylex from "@stylexjs/stylex";

const pulse = stylex.keyframes({
  "0%": { borderColor: "#FEE715", color: "#FEE715" },
  "50%": { borderColor: "rgba(0, 255, 255, 0)", color: "rgba(0, 255, 255, 0)" },
  "100%": { borderColor: "white" },
});

const styles = stylex.create({
  fileContainer: (borderColor: string) => ({
    padding: "10px",
    width: "fit-content",
    borderRadius: "10px",
    backgroundColor: "transparent",
    border: `2px solid`,
    borderColor,
    color: borderColor,
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
  }),
});

export default function GenerateFile() {
  return (
    <Link href="/generate-file">
      <button {...stylex.props(styles.fileContainer(ThemeColors.WHITE))}>
        Generate new file <AddIcon />
      </button>
    </Link>
  );
}
