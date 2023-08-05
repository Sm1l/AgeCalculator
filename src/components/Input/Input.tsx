import React from "react";

import styles from "./Input.module.scss";

interface InputProps {
  name: string;
  placeholder: string;
  register: any;
}

const Input: React.FC<InputProps> = ({ name, placeholder, register }) => {
  return (
    <div className={styles.input}>
      <label htmlFor="day" className={styles.label}>
        {name.toUpperCase()}
      </label>
      <input
        className={styles.input}
        type="number"
        id={name}
        placeholder={placeholder}
        autoComplete="off"
        // {...register("day", {
        //   required: "Заполните поле",
        //   min: { value: 0, message: "минимальное значение равно 0" },
        //   max: { value: 31, message: "максимальное значение равно 31" },
        // pattern: {
        //   value: /^(0?[1-9]|1[012])$/,
        //   message: "Что за дела? Вводи корректный номер!",
        // },
        // })}
        {...register}
      />
      {/* <div className={styles.error}>{errors?.day && <p>{errors?.day?.message || "error"}</p>}</div> */}
    </div>
  );
};

export { Input };
