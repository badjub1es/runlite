import React, { type PropsWithChildren } from "react";
import { AlignItemsValues } from "~/types/AlignItems/AlignItemsValues";
import { JustifyContentValues } from "~/types/JustifyContent/JustifyContentValues";
import * as stylex from "@stylexjs/stylex";

interface BackgroundProps extends PropsWithChildren {
  alignItems?: AlignItemsValues;
  justifyContent?: JustifyContentValues;
}

const styles = stylex.create({
  background: {
    display: "flex",
    padding: "4rem 10vw",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    flexDirection: "column",
    backgroundImage: "linear-gradient(to bottom, #101820, #192532)",
  },
});

export default function Background({
  children,
  alignItems,
  justifyContent,
}: BackgroundProps) {
  return (
    <section
      {...stylex.props(styles.background)}
      style={{
        [alignItems ? "alignItems" : ""]: alignItems,
        [justifyContent ? "justifyContent" : ""]: justifyContent,
      }}
    >
      {children}
    </section>
  );
}
