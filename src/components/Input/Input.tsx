import React, { type ChangeEvent } from "react";
import { type InputType } from "~/types/Input/InputType";
import { type InputValue } from "~/types/Input/InputValue";
import * as stylex from "@stylexjs/stylex";
import Stack from "../Stack/Stack";

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
  backgroundColor?: string;
  color?: string;
  border?: string;
  width?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  maxLength?: number;
}

const styles = stylex.create({
  input: {
    padding: ".5rem",
    borderRadius: "4px",
    "::placeholder": {
      color: "white",
      fontStyle: "italic",
    },
    ":focus": {
      outline: "1px solid #fef08a",
    },
  },
  helperText: {
    color: "white",
    fontSize: ".8rem",
    marginLeft: ".75rem",
  },
  placeholderError: {
    "::placeholder": {
      color: "red",
    },
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
  backgroundColor = "transparent",
  color = "white",
  border = "1px solid white",
  width = "100%",
  label,
  error = false,
  helperText,
  maxLength,
}: InputProps) {
  if (label) {
    return (
      <Stack spacing={10} direction="column">
        <label
          htmlFor={id}
          style={{
            color,
          }}
        >
          {label}
        </label>
        <input
          {...stylex.props(styles.input, error && styles.placeholderError)}
          style={{
            [disabled ? "cursor" : ""]: "not-allowed",
            backgroundColor,
            color,
            border: error ? "1px solid red" : border,
            width,
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
          maxLength={maxLength}
        />
        {helperText && (
          <span
            {...stylex.props(styles.helperText)}
            style={{
              [error ? "color" : ""]: "red",
            }}
          >
            {helperText}
          </span>
        )}
      </Stack>
    );
  }
  return (
    <input
      {...stylex.props(styles.input)}
      style={{
        [disabled ? "cursor" : ""]: "not-allowed",
        backgroundColor,
        color,
        border,
        width,
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
