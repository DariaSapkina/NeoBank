import { validateFormFirstStep } from "@/utils";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";

const useFormFirstStep = () => {
  const [isLoading, setIsLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      amount: 150000,
      term: 6,
      firstName: "",
      lastName: "",
      middleName: "",
      email: "",
      birthdate: "",
      passportSeries: "",
      passportNumber: "",
    },
    validate: validateFormFirstStep,
    validateOnChange: false,
    onSubmit: async (values) => {
      const preparedValues = Object.fromEntries(
        Object.entries(values).map(([key, value]) => {
          if (typeof value === "string") {
            value = value.trim();
          }
          if (key === "middleName") {
            return [key, value === "" ? null : value];
          }
          if (key === "birthdate" && typeof value === "string") {
            const date = new Date(value);
            const day = String(date.getDate()).padStart(2, "0");
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const year = date.getFullYear();
            return [key, `${year}-${month}-${day}`];
          }

          return [key, value];
        }),
      ) as typeof values;
      try {
        await axios.post("http://localhost:8080/application", preparedValues);
        setIsLoading(true);
      } catch (e) {
        console.log(e);
      }
    },
  });
  return { ...formik, isLoading };
};

export { useFormFirstStep };
