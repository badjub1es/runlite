"use client";

import React from "react";
import Stack from "../components/Stack/Stack";
import Background from "~/components/Background/Background";
import FileDropZone from "../components/FileDropZone/FileDropZone";
import GenerateFile from "../components/GenerateFile/GenerateFile";
import { ThemeColors } from "~/types/Colors/ThemeColors";
import { NotificationProvider } from "~/providers/NotificationProvider";
import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  secondarySpan: (secondaryColor: ThemeColors) => ({
    color: secondaryColor,
  }),
  title: (color: ThemeColors) => ({
    color,
    fontSize: "3rem",
    lineHeight: 1,
    fontWeight: 800,
    letterSpacing: "-0.025em",
    margin: 0,
  }),
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3rem",
    padding: "4rem 1rem",
  },
});

export default function Home() {
  return (
    <Background>
      <NotificationProvider>
        <div {...stylex.props(styles.container)}>
          <h1 {...stylex.props(styles.title(ThemeColors.WHITE))}>
            run
            <span
              {...stylex.props(styles.secondarySpan(ThemeColors.SECONDARY))}
            >
              lite
            </span>
          </h1>
          <Stack direction="row" spacing={10}>
            <FileDropZone />
            <GenerateFile />
          </Stack>
        </div>
      </NotificationProvider>
    </Background>
  );
}
