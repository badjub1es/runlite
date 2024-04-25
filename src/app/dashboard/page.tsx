"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useRunTrackingStore } from "~/providers/RunTrackingStoreProvider";

export default function Home() {
  const router = useRouter();
  const { validFileAvailable } = useRunTrackingStore((state) => state);

  if (!validFileAvailable) {
    router.push("/");
  }

  return (
    <section className="background">
      <div>DASHBOARD</div>
    </section>
  );
}
