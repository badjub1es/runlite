import React from "react";
import GradientProgress from "~/components/GradientProgress/GradientProgress";
import { Fade, Stack } from "@mui/material";
import { useRouter } from "next/navigation";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";
import { AppRoute } from "~/types/AppRoute/AppRoute";
import Background from "~/components/Background/Background";

export default function DashboardLoading() {
  const router = useRouter();
  const { setValidFileAvailable } = useRunTrackingStore((state) => state);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      setValidFileAvailable(true);
      router.push(AppRoute.DASHBOARD);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [router, setValidFileAvailable]);

  return (
    <Background>
      <Fade in timeout={2000}>
        <Stack direction="column" justifyContent="center" alignItems="center">
          <h1 style={{ color: "white" }}>Getting your dashboard ready . . .</h1>
          <GradientProgress />
        </Stack>
      </Fade>
    </Background>
  );
}
