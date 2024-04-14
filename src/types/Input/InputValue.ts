import { DetailedHTMLProps, InputHTMLAttributes } from "react"

export type InputValue = DetailedHTMLProps<
InputHTMLAttributes<HTMLInputElement>,
HTMLInputElement
>["value"]
