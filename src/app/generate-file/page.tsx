import React from "react";
import styles from "~/app/index.module.css";

export default function Home() {
  return (
    <section className="background">
      <h2 className={styles.subTitle}>
        Generate a new file to track your{" "}
        <span className={styles.yellowSpan}>running</span>
      </h2>
    </section>
  );
}
