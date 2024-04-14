import React from "react";
import { Fade } from "@mui/material";
import * as stylex from "@stylexjs/stylex";

interface CardProps extends React.PropsWithChildren {
  fade?: boolean;
  fadeIn?: boolean;
  fadeTimeout?: number;
  backgroundColor?: string;
}

const styles = stylex.create({
  card: {
    padding: "1rem",
    borderRadius: "10px",
    boxShadow: "0 3px 5px rgba(0, 0, 0, 0.5)",
  },
});

export default function Card({
  children,
  fade = false,
  fadeIn = true,
  fadeTimeout = 1000,
  backgroundColor = "white",
}: CardProps) {
  if (fade) {
    return (
      <Fade in={fadeIn} timeout={fadeTimeout}>
        <div {...stylex.props(styles.card)} style={{ backgroundColor }}>
          {children}
        </div>
      </Fade>
    );
  }

  return (
    <div {...stylex.props(styles.card)} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
