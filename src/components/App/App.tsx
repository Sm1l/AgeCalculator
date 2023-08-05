import React from "react";

import styles from "./App.module.scss";
import { MainContainer } from "components/MainContainer";
import { Form } from "components/Form";
import { Result } from "components/Result";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <MainContainer>
        {/* <h1 className={styles.title}>Age calculator</h1>
        <Form />
        <Result /> */}
      </MainContainer>
    </div>
  );
};

export { App };
