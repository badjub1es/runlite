"use client";
import React from "react";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  divider: {
    borderBottom: "1px solid black",
    marginBottom: "1.5rem",
  },
});

export default function Divider() {
  return <hr {...stylex.props(styles.divider)}></hr>;
}
