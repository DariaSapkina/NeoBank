import { registerApplication } from "@/api";
import type { TRootState } from "@/store";
import { validateFormSecondStep } from "@/utils";
import { prepareDataFormSecondStep } from "@/utils";
import { useFormik } from "formik";
import { useState } from "react";
import { useSelector } from "react-redux";

export const useFormSecondStep = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const [isSuccesRegistration, setIsSuccesRegistration] = useState(false);

  const formik = useFormik({
    initialValues: {
      gender: "",
      maritalStatus: "",
      dependentAmount: "",
      passportIssueDate: "",
      passportIssueBranch: "",
      employmentStatus: "",
      employerINN: "",
      salary: "",
      position: "",
      workExperienceTotal: "",
      workExperienceCurrent: "",
    },
    validate: validateFormSecondStep,
    validateOnChange: false,
    onSubmit: async (values) => {
      setIsLoading(true);
      const preparedData = prepareDataFormSecondStep(values);

      if (!applicationId) {
        setIsLoading(false);
        return;
      }

      const res = await registerApplication(applicationId, preparedData);

      if (res) {
        setIsSuccesRegistration(true);
      }

      setIsLoading(false);
    },
  });

  return { ...formik, isLoading, isSuccesRegistration };
};
