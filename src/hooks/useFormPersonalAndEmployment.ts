import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerApplication } from "@/api";
import { completeStep, setStep, type TRootState } from "@/store";
import { validateFormSecondStep, prepareDataFormSecondStep } from "@/utils";

export const useFormPersonalAndEmployment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { applicationId } = useSelector((state: TRootState) => state.offers);
  const dispatch = useDispatch();

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
        dispatch(completeStep(2));
        dispatch(setStep(3));
      }

      setIsLoading(false);
    },
  });

  return { ...formik, isLoading };
};
