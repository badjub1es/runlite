import React from "react";
import styles from "~/app/index.module.css";
import Stack from "../components/Stack/Stack";
import Image from "next/image";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <section className="background">
      <Stack spacing={10} justifyContent="center" alignItems="center">
        <h2 className={styles.subTitle}>
          Generate a new file to track your{" "}
          <span className={styles.yellowSpan}>running</span>
        </h2>
        <img
          height={75}
          width={75}
          src="./images/naruto.gif"
          alt="naruto GIF"
        />
      </Stack>
      <Card>Hello</Card>
    </section>
  );
}
