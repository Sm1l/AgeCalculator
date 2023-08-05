import React from "react";

import styles from "./Result.module.scss";
import { getAge } from "helpers/getAge";

interface ResultProps {
  year: number | null;
  month: number | null;
  day: number | null;
}

const Result: React.FC<ResultProps> = ({ year, month, day }) => {
  const brthDate = getAge("08/04/2022");
  console.log("BRTH", brthDate);

  return (
    <div className={styles.result}>
      <div className={styles.container}>
        <div className={styles.number}>{year ? year : "- -"}</div>
        <p className={styles.text}>years</p>
      </div>
      <div className={styles.container}>
        <div className={styles.number}>{month ? month : "- -"}</div>
        <p className={styles.text}>months</p>
      </div>
      <div className={styles.container}>
        <div className={styles.number}>{day ? day : "- -"}</div>
        <p className={styles.text}>days</p>
      </div>
    </div>
  );
};

export { Result };
