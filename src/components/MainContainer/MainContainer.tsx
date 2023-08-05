import React, { useState } from "react";
import { Form } from "components/Form";
import { Result } from "components/Result";

import styles from "./MainContainer.module.scss";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [year, setYear] = useState<number | null>(null);
  const [month, setMonth] = useState<number | null>(null);
  const [day, setDay] = useState<number | null>(null);
  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Age calculator</h1>
      <Form setYear={setYear} setMonth={setMonth} setDay={setDay} />
      <Result year={year} month={month} day={day} />
    </div>
  );
};

export { MainContainer };
