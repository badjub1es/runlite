import React from "react";
import GradientProgress from "~/components/GradientProgress/GradientProgress";
import { Fade, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";

export default function DashboardLoading() {
  const router = useRouter();
  const { setValidFileAvailable } = useRunTrackingStore((state) => state);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidFileAvailable(true);
      router.push("/dashboard");
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="background">
      <Fade in timeout={2000}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <h1 style={{ color: "white" }}>Getting your dashboard ready . . .</h1>
          <GradientProgress />
        </Stack>
      </Fade>
    </section>
  );
}
