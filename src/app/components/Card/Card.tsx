import React from "react";
import * as stylex from "@stylexjs/stylex";

interface CardProps extends React.PropsWithChildren {
  backgroundColor?: string;
}

const styles = stylex.create({
  card: {
    padding: "1rem 2rem",
  },
});

export default function Card({
  children,
  backgroundColor = "white",
}: CardProps) {
  return (
    <div {...stylex.props(styles.card)} style={{ backgroundColor }}>
      {children}
    </div>
  );
}
