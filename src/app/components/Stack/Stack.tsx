import React, { PropsWithChildren } from "react";
import { AlignItemsValues } from "~/types/AlignItems/AlignItemsValues";
import { JustifyContentValues } from "~/types/JustifyContent/JustifyContentValues";

interface StackProps extends PropsWithChildren {
  spacing?: number;
  direction?: "row" | "column";
  justifyContent?: JustifyContentValues;
  alignItems?: AlignItemsValues;
}

export default function Stack({
  children,
  direction = "row",
  spacing = 0,
  justifyContent,
  alignItems,
}: StackProps) {
  const styles = {
    display: "flex",
    gap: spacing,
    flexDirection: direction,
    justifyContent,
    alignItems,
  };

  return <div style={styles}>{children}</div>;
}
