import React, { useState } from "react";
import { Form } from "components/Form";
import { Result } from "components/Result";

import styles from "./MainContainer.module.scss";

interface MainContainerProps {}

const MainContainer: React.FC<MainContainerProps> = () => {
  const [bYear, setBYear] = useState<string | null>(null);
  const [bMonth, setBMonth] = useState<string | null>(null);
  const [bDay, setBDay] = useState<string | null>(null);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.title}>Age calculator</h1>
      <Form setBYear={setBYear} setBMonth={setBMonth} setBDay={setBDay} />
      <Result bYear={bYear} bMonth={bMonth} bDay={bDay} />
    </div>
  );
};

export { MainContainer };
