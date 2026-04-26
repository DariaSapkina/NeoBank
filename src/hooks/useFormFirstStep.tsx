import { useState } from "react";
import { useFormik } from "formik";
import { validateFormFirstStep, prepareDataFormFirstStep } from "@/utils";
import type { IFormInput } from "@/components";
import { sendFirstStepForm, type IRequestFirstStep } from "@/api";

const useFormFirstStep = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [offers, setOffers] = useState<IRequestFirstStep[] | undefined>([]);

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
        setOffers(res);
      }
      
      setIsLoading(false);
    },
  });
  return { ...formik, isLoading, offers };
};

export { useFormFirstStep };
