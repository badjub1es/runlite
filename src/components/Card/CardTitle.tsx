import React, { type PropsWithChildren } from "react";

interface CardTitleProps extends PropsWithChildren {
  color?: string;
}

export default function CardTitle({ children, color }: CardTitleProps) {
  const sx = {
    [color ? "color" : ""]: color,
    marginBlockStart: "0.83rem",
    marginBlockEnd: "0.83rem",
  };

  return <h2 style={sx}>{children}</h2>;
}
