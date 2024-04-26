import { type DetailedHTMLProps, type InputHTMLAttributes } from "react";

export type InputType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>["type"];
