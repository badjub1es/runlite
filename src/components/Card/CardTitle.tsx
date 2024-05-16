import React, { type PropsWithChildren } from "react";

interface CardTitleProps extends PropsWithChildren {
  id?: string;
  color?: string;
}

export default function CardTitle({ children, color, id }: CardTitleProps) {
  const sx = {
    [color ? "color" : ""]: color,
    marginBlockStart: "0.83rem",
    marginBlockEnd: "0.83rem",
  };

  return (
    <h2 id={id} style={sx}>
      {children}
    </h2>
  );
}
