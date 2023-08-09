import React from "react";

import styles from "./App.module.scss";
import { MainContainer } from "components/MainContainer";

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <MainContainer />
    </div>
  );
};

export { App };
