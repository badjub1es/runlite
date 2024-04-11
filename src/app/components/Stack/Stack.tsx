import React, { PropsWithChildren } from "react";

interface StackProps extends PropsWithChildren {
  spacing?: number;
  direction?: "row" | "column";
}

export default function Stack({
  children,
  direction = "row",
  spacing = 0,
}: StackProps) {
  const styles = {
    display: "flex",
    gap: spacing,
    flexDirection: direction,
  };

  return <div style={styles}>{children}</div>;
}
