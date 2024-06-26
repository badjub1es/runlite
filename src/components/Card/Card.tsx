import React from "react";
import { Fade } from "@mui/material";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import * as stylex from "@stylexjs/stylex";

interface CardProps extends React.PropsWithChildren {
  fade?: boolean;
  fadeIn?: boolean;
  fadeTimeout?: number;
  backgroundColor?: ThemeColors;
  width?: string;
}

const styles = stylex.create({
  card: (width: string, backgroundColor: ThemeColors) => ({
    padding: "1.2rem",
    borderRadius: "30px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
    maxWidth: "80vw",
    width,
    backgroundColor,
  }),
});

export default function Card({
  children,
  fade = false,
  fadeIn = true,
  fadeTimeout = 1000,
  backgroundColor = ThemeColors.WHITE,
  width = "",
}: CardProps) {
  if (fade) {
    return (
      <Fade in={fadeIn} timeout={fadeTimeout}>
        <div {...stylex.props(styles.card(width, backgroundColor))}>
          {children}
        </div>
      </Fade>
    );
  }

  return (
    <div {...stylex.props(styles.card(width, backgroundColor))}>{children}</div>
  );
}
