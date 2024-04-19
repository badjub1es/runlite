"use client";
import React from "react";
import styles from "~/app/index.module.css";
import Stack from "../components/Stack/Stack";
import GenerateFileForm from "./GenerateFileForm/GenerateFileForm";
import { Fade } from "@mui/material";
import * as stylex from "@stylexjs/stylex";

const stylexStyles = stylex.create({
  container: {
    maxWidth: "80vw",
  },
});

export default function Home() {
  const [titleVisible, setTitleVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setTitleVisible(false);

      return () => {
        clearInterval(timeout);
      };
    }, 3000);
  }, []);

  return (
    <section className="background">
      <Stack direction="column" spacing={50}>
        {titleVisible && (
          <Fade in={titleVisible}>
            <div {...stylex.props(stylexStyles.container)}>
              <Stack spacing={10} justifyContent="center" alignItems="center">
                <h1 className={styles.subTitle}>
                  Generate a new file to track your{" "}
                  <span className={styles.yellowSpan}>running</span>
                </h1>
                <img
                  height={75}
                  width={75}
                  src="./images/naruto.gif"
                  alt="naruto GIF"
                />
              </Stack>
            </div>
          </Fade>
        )}
        <GenerateFileForm fadeIn={!titleVisible} />
      </Stack>
    </section>
  );
}
