"use client";
import React, { ChangeEvent } from "react";
import { type InputType } from "~/types/Input/InputType";
import { type InputValue } from "~/types/Input/InputValue";
import * as stylex from "@stylexjs/stylex";

interface InputProps {
  id?: string;
  name?: string;
  value?: InputValue;
  type?: InputType;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  readOnly?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  step?: number;
  autoFocus?: boolean;
}

const styles = stylex.create({
  input: {
    padding: ".5rem",
    borderRadius: "4px",
    backgroundColor: "white",
  },
});

export default function Input({
  id,
  name,
  value,
  onChange,
  type,
  placeholder,
  required = false,
  readOnly = false,
  multiple = false,
  disabled = false,
  step = 1,
  autoFocus = false,
}: InputProps) {
  return (
    <input
      {...stylex.props(styles.input)}
      style={{
        [disabled ? "cursor" : ""]: "not-allowed",
      }}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      readOnly={readOnly}
      multiple={multiple}
      step={step}
      autoFocus={autoFocus}
      disabled={disabled}
    />
  );
}
