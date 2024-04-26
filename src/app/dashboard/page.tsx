"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";

export default function Home() {
  const router = useRouter();
  const { validFileAvailable } = useRunTrackingStore((state) => state);

  React.useEffect(() => {
    if (validFileAvailable) {
      router.push("/");
    }
  }, [router, validFileAvailable]);

  return (
    <section className="background">
      <div>DASHBOARD</div>
    </section>
  );
}
