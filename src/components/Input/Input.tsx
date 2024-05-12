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
  backgroundColor?: ThemeColors;
  color?: ThemeColors;
  border?: string;
  width?: string;
  label?: string;
  error?: boolean;
  helperText?: string;
  maxLength?: number;
}

const styles = stylex.create({
  input: (
    textColor: ThemeColors,
    secondaryColor: ThemeColors,
    backgroundColor: ThemeColors
  ) => ({
    color: textColor,
    padding: ".5rem",
    borderRadius: "4px",
    backgroundColor,
    "::placeholder": {
      color: textColor,
      fontStyle: "italic",
    },
    ":focus": {
      outline: `1px solid ${secondaryColor}`,
    },
  }),
  border: (style: string) => ({
    border: style,
  }),
  helperText: (textColor: ThemeColors) => ({
    color: textColor,
    fontSize: ".8rem",
    marginLeft: ".75rem",
  }),
  error: (errorColor: ThemeColors) => ({
    border: `1px solid ${errorColor}`,
    "::placeholder": {
      color: errorColor,
    },
  }),
  width: (width: string) => ({
    width,
  }),
  disabled: {
    cursor: "not-allowed",
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
  backgroundColor = ThemeColors.TRANSPARENT,
  color = ThemeColors.WHITE,
  border = `1px solid ${ThemeColors.WHITE}`,
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
            styles.input(color, ThemeColors.SECONDARY, backgroundColor),
            styles.width(width),
            styles.border(error ? `1px solid ${ThemeColors.ERROR}` : border),
            error && styles.error(ThemeColors.ERROR),
            disabled && styles.disabled
          )}
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
            {...stylex.props(
              styles.helperText(error ? ThemeColors.ERROR : ThemeColors.WHITE)
            )}
          >
            {helperText}
          </span>
        )}
      </Stack>
    );
  }
  return (
    <input
      {...stylex.props(
        styles.input(
          ThemeColors.WHITE,
          ThemeColors.SECONDARY,
          ThemeColors.TRANSPARENT
        ),
        styles.border(error ? `1px solid ${ThemeColors.ERROR}` : border),
        styles.width(width),
        error && styles.error(ThemeColors.ERROR),
        disabled && styles.disabled
      )}
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
