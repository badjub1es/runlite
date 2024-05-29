import React, { type PropsWithChildren } from "react";

interface CardTitleProps extends PropsWithChildren {
  id?: string;
  color?: string;
  component?: "h2" | "h3";
}

export default function CardTitle({
  children,
  color,
  id,
  component = "h2",
}: CardTitleProps) {
  const sx = {
    [color ? "color" : ""]: color,
    marginBlockStart: "0.83rem",
    marginBlockEnd: "0.83rem",
  };

  if (component === "h3") {
    return (
      <h3 id={id} style={sx}>
        {children}
      </h3>
    );
  }

  return (
    <h2 id={id} style={sx}>
      {children}
    </h2>
  );
}
