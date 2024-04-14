import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export type InputType = DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>["type"]
