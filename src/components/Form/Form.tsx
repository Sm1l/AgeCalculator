import React from "react";
import { useForm } from "react-hook-form";

import styles from "./Form.module.scss";
import { InputComponent } from "components/InputComponent";

// import { ValidationValueMessage } from "react-hook-form"; //!!!!ё

export interface IFormValues {
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
  } = useForm<IFormValues>({ mode: "onBlur" });

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
          <InputComponent
            placeholder="dd"
            name="day"
            register={register}
            rules={{
              required: "The field should not be empty",
              min: { value: 1, message: "Min value is 1" },
              max: { value: 31, message: "Max value is 31" },
            }}
            errors={errors}
          />
          <InputComponent
            name="month"
            placeholder="mm"
            register={register}
            rules={{
              required: "The field should not be empty",
              min: { value: 1, message: "Min value is 01" },
              max: { value: 12, message: "Max value is 12" },
              maxLength: { value: 2, message: "Max value is 12" },
            }}
            errors={errors}
          />
          <InputComponent
            name="year"
            placeholder="yyyy"
            register={register}
            rules={{
              required: "The field should not be empty",
              min: { value: 1900, message: "Must be a valid year" },
              max: { value: yearNow, message: "Must be in the past" },
            }}
            errors={errors}
          />
        </div>
        <button className={styles.button} type="submit" disabled={!isValid} />
      </form>
    </>
  );
};

export { Form };
