import React from "react";
import * as stylex from "@stylexjs/stylex";

interface DividerProps {
  color?: string;
}

const styles = stylex.create({
  divider: {
    borderBottom: "2px solid black",
    marginBottom: "1.5rem",
  },
});

export default function Divider({ color }: DividerProps) {
  const sx = {
    [color ? "borderBottom" : ""]: `2px solid ${color}`,
  };

  return <hr {...stylex.props(styles.divider)} style={sx}></hr>;
}
