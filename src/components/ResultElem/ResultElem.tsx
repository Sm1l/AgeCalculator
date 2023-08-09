import React from "react";
import CountUp from "react-countup";

import styles from "./ResultElem.module.scss";

interface ResultElemProps {
  num: number | null;
  text: string;
}

const ResultElem: React.FC<ResultElemProps> = ({ num, text }) => {
  return (
    <div className={styles.resultElem}>
      <div className={styles.number}>{num ? <CountUp start={0} end={num} duration={4} /> : "- -"}</div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export { ResultElem };
