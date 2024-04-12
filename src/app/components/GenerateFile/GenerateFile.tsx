import Link from "next/link";
import React from "react";
import styles from "~/app/index.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function GenerateFile() {
  return (
    <Link href="/generate-file">
      <button className={styles.generateFileContainer}>
        Generate new file <AddIcon />
      </button>
    </Link>
  );
}
