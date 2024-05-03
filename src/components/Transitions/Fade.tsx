import { Fade as MuiFade } from "@mui/material";
import { type PropsWithChildren } from "react";

interface FadeProps extends PropsWithChildren {
  in: boolean;
  timeout?: number;
}

export default function Fade({
  children,
  in: fadeIn,
  timeout = 1000,
}: FadeProps) {
  return (
    <MuiFade in={fadeIn} timeout={timeout}>
      <div>{children}</div>
    </MuiFade>
  );
}
