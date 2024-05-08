import React, { type ChangeEvent } from "react";
import Stack from "../Stack/Stack";
import { ThemeColors } from "~/types/Colors/ThemeColors";
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
  input: (textColor: ThemeColors, secondaryColor: ThemeColors) => ({
    padding: ".5rem",
    borderRadius: "4px",
    "::placeholder": {
      color: textColor,
      fontStyle: "italic",
    },
    ":focus": {
      outline: `1px solid ${secondaryColor}`,
    },
  }),
  helperText: (textColor: ThemeColors) => ({
    color: textColor,
    fontSize: ".8rem",
    marginLeft: ".75rem",
  }),
  placeholderError: (errorColor: ThemeColors) => ({
    "::placeholder": {
      color: errorColor,
    },
  }),
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
  color = ThemeColors.WHITE,
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
          {...stylex.props(
            styles.input(ThemeColors.WHITE, ThemeColors.SECONDARY),
            error && styles.placeholderError(ThemeColors.ERROR)
          )}
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
            {...stylex.props(styles.helperText(ThemeColors.WHITE))}
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
      {...stylex.props(styles.input(ThemeColors.WHITE, ThemeColors.SECONDARY))}
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
