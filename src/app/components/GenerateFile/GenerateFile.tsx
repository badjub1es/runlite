import Link from "next/link";
import React from "react";
import styles from "~/app/index.module.css";

export default function GenerateFile() {
  return (
    <Link href="/generate-file">
      <button className={styles.generateFileContainer}>
        Generate new file
      </button>
    </Link>
  );
}
