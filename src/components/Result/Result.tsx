import React, { useEffect, useState } from "react";

import styles from "./Result.module.scss";

import { myAge } from "helpers/getAge";

interface ResultProps {
  bYear: null | string;
  bMonth: null | string;
  bDay: null | string;
}

const Result: React.FC<ResultProps> = ({ bYear, bMonth, bDay }) => {
  const [year, setYear] = useState<string>("- -");
  const [month, setMonth] = useState<string>("- -");
  const [day, setDay] = useState<string>("- -");

  useEffect(() => {
    if (bYear) {
      let bDate: string = bYear + "-" + bMonth + "-" + bDay; //*yyyy-mm-dd
      const { y, m, d } = myAge(bDate);
      setYear(y.toString());
      setMonth(m.toString());
      setDay(d.toString());
    }
  }, [bYear, bMonth, bDay]);

  return (
    <div className={styles.result}>
      <div className={styles.container}>
        <div className={styles.number}>{year}</div>
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
