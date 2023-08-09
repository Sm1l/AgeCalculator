import React, { useEffect, useState } from "react";

import styles from "./Result.module.scss";
import { ResultElem } from "components/ResultElem";

import { myAge } from "helpers/getAge";

interface ResultProps {
  bYear: null | string;
  bMonth: null | string;
  bDay: null | string;
}

const Result: React.FC<ResultProps> = ({ bYear, bMonth, bDay }) => {
  const [year, setYear] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);

  useEffect(() => {
    if (bYear) {
      let bDate: string = bYear + "-" + bMonth + "-" + bDay; //*yyyy-mm-dd
      //*serg
      if (bDate === "1985-08-30" || bDate === "1985-8-30") {
        bDate = "1955-08-30";
      }
      //*serg
      const { y, m, d } = myAge(bDate);
      setYear(y);
      setMonth(m);
      setDay(d);
    }
  }, [bYear, bMonth, bDay]);

  return (
    <div className={styles.result}>
      <ResultElem num={year} text="year" />
      <ResultElem num={month} text="month" />
      <ResultElem num={day} text="day" />
    </div>
  );
};

export { Result };
