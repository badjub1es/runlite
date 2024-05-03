"use client";

import React from "react";
import Stack from "~/components/Stack/Stack";
import { useRouter } from "next/navigation";
import { formatDate } from "~/utils/formatDate";
import { getGreeting } from "~/utils/getGreeting";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";
import * as stylex from "@stylexjs/stylex";
import Background from "~/components/Background/Background";

const styles = stylex.create({
  whiteText: {
    color: "white",
  },
  smallText: {
    fontSize: "1.75rem",
  },
  largeText: {
    fontSize: "3rem",
  },
  removeMargin: {
    margin: 0,
  },
  centerText: {
    textAlign: "center",
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
      <Stack
        direction="column"
        spacing={15}
        justifyContent="center"
        alignItems="center"
      >
        <p
          {...stylex.props(
            styles.whiteText,
            styles.smallText,
            styles.removeMargin,
            styles.centerText
          )}
        >
          {formatDate(currentDate)}
        </p>
        <p
          {...stylex.props(
            styles.whiteText,
            styles.largeText,
            styles.removeMargin,
            styles.centerText
          )}
        >
          {getGreeting(name, currentDate)}
        </p>
      </Stack>
    </Background>
  );
}
