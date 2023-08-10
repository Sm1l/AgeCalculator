import React from "react";
import { useForm } from "react-hook-form";

import styles from "./Form.module.scss";
import { Input } from "components/Input";

// import { ValidationValueMessage } from "react-hook-form"; //!!!!ё

interface FormValues {
  day: string;
  month: string;
  year: string;
}

interface FormProps {
  setBYear: React.Dispatch<React.SetStateAction<string | null>>;
  setBMonth: React.Dispatch<React.SetStateAction<string | null>>;
  setBDay: React.Dispatch<React.SetStateAction<string | null>>;
}

const Form: React.FC<FormProps> = ({ setBYear, setBMonth, setBDay }) => {
  const yearNow: number = new Date().getFullYear();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm<FormValues>({ mode: "onBlur" });

  const onSubmit = handleSubmit((data) => {
    setBYear(data.year);
    setBMonth(data.month);
    setBDay(data.day);
    reset();
  });

  return (
    <>
      <form className={styles.form} onSubmit={onSubmit}>
        <div className={styles.inputContainer}>
          <div className={styles.inputComponent}>
            <label htmlFor="day" className={errors.day ? `${styles.label} ${styles.textError}` : styles.label}>
              day
            </label>
            <input
              className={errors.day ? `${styles.input} ${styles.inputError}` : styles.input}
              type="number"
              id="day"
              placeholder="dd"
              autoComplete="off"
              {...register("day", {
                required: "The field should not be empty",
                min: { value: 1, message: "Min value is 1" },
                max: { value: 31, message: "Max value is 31" },
              })}
            />
            <div className={styles.error}>{errors?.day && <p>{errors?.day?.message || "error"}</p>}</div>
          </div>
          <div className={styles.inputComponent}>
            <label htmlFor="month" className={errors.month ? `${styles.label} ${styles.textError}` : styles.label}>
              month
            </label>
            <input
              className={errors.month ? `${styles.input} ${styles.inputError}` : styles.input}
              type="number"
              id="month"
              placeholder="mm"
              autoComplete="off"
              {...register("month", {
                required: "The field should not be empty",
                min: { value: 1, message: "Min value is 01" },
                max: { value: 12, message: "Max value is 12" },
                maxLength: { value: 2, message: "Max value is 12" },
              })}
            />
            <div className={styles.error}>{errors?.month && <p>{errors?.month?.message || "error"}</p>}</div>
          </div>
          <div className={styles.inputComponent}>
            <label htmlFor="year" className={errors.year ? `${styles.label} ${styles.textError}` : styles.label}>
              year
            </label>
            <input
              className={errors.year ? `${styles.input} ${styles.inputError}` : styles.input}
              type="number"
              id="year"
              placeholder="yyyy"
              autoComplete="off"
              {...register("year", {
                required: "The field should not be empty",
                min: { value: 1900, message: "Must be a valid year" },
                max: { value: yearNow, message: "Must be in the past" },
              })}
            />
            <div className={styles.error}>{errors?.year && <p>{errors?.year?.message || "error"}</p>}</div>
          </div>
          {/* <Input />
          //!!!!ё */}
        </div>
        <button className={styles.button} type="submit" disabled={!isValid} />
      </form>
    </>
  );
};

export { Form };
