import React from "react";
import { CircularProgress } from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";

export default function GradientProgress() {
  return (
    <React.Fragment>
      <svg width={0} height={0}>
        <defs>
          <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={ThemeColors.WHITE} />
            <stop offset="100%" stopColor={ThemeColors.SECONDARY} />
          </linearGradient>
        </defs>
      </svg>
      <CircularProgress
        sx={{ "svg circle": { stroke: "url(#my_gradient)" } }}
      />
    </React.Fragment>
  );
}
