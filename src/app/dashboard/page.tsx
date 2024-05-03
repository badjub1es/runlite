"use client";

import React from "react";
import Stack from "~/components/Stack/Stack";
import { useRouter } from "next/navigation";
import { formatDate } from "~/utils/formatDate";
import { getGreeting } from "~/utils/getGreeting";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";
import * as stylex from "@stylexjs/stylex";
import Background from "~/components/Background/Background";
import Fade from "~/components/Transitions/Fade";

const styles = stylex.create({
  baseText: {
    lineHeight: 1,
    fontWeight: 700,
    letterSpacing: "-0.025em",
    color: "white",
    textAlign: "center",
    margin: 0,
  },
  smallText: {
    fontSize: "1.5rem",
  },
  largeText: {
    fontSize: "2.5rem",
  },
});

export default function Home() {
  const router = useRouter();
  const { validFileAvailable, name } = useRunTrackingStore((state) => state);

  const [currentDate, setCurrentDate] = React.useState(new Date());

  // If no valid file is available, redirect to "/"
  React.useEffect(() => {
    if (!validFileAvailable) {
      router.push("/");
    }
  }, [router, validFileAvailable]);

  // Update current date every second
  React.useEffect(() => {
    const dateInterval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => clearInterval(dateInterval);
  }, []);

  return (
    <Background justifyContent="flex-start" padding="4rem 0rem 0rem 0rem">
      <Fade in timeout={2000}>
        <Stack
          direction="column"
          spacing={15}
          justifyContent="center"
          alignItems="center"
        >
          <p {...stylex.props(styles.baseText, styles.smallText)}>
            {formatDate(currentDate)}
          </p>
          <p {...stylex.props(styles.baseText, styles.largeText)}>
            {getGreeting(name, currentDate)}
          </p>
        </Stack>
      </Fade>
    </Background>
  );
}
