import React, { type PropsWithChildren } from "react";
import { AlignItemsValues } from "~/types/AlignItems/AlignItemsValues";
import { JustifyContentValues } from "~/types/JustifyContent/JustifyContentValues";
import * as stylex from "@stylexjs/stylex";

interface BackgroundProps extends PropsWithChildren {
  padding: string;
  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;
}

const styles = stylex.create({
  background: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundImage: "linear-gradient(to bottom, #1d4ed8, #15162c)",
  },
});

export default function Background({
  children,
  alignItems,
  padding,
  justifyContent,
}: BackgroundProps) {
  return (
    <section
      {...stylex.props(styles.background)}
      style={{
        [alignItems ? "alignItems" : ""]: alignItems,
        [justifyContent ? "justifyContent" : ""]: justifyContent,
        [padding ? "padding" : ""]: padding,
      }}
    >
      {children}
    </section>
  );
}
