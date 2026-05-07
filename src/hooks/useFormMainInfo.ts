import { useState } from "react";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { validateFormFirstStep, prepareDataFormFirstStep } from "@/utils";
import type { IFormInput } from "@/types";
import { sendFirstStepForm } from "@/api";
import { setOffers } from "@/store";

export const useFormMainInfo = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

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
      setIsLoading(true);
      const preparedValues: IFormInput = prepareDataFormFirstStep(values);
      const res = await sendFirstStepForm(preparedValues);

      if (res) {
        dispatch(setOffers(res));
      }

      setIsLoading(false);
    },
  });

  return { ...formik, isLoading };
};
