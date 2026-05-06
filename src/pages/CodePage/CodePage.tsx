import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { PinInput, Spinner } from "@/components";
import { useApplicationIdGuard, useCode } from "@/hooks";
import { CompleteNotice } from "./components";
import type { TRootState } from "@/store";
import "./CodePage.scss";

const CodePage = () => {
  const { error, handleCheckCode, loading } = useCode();
  const { completed } = useSelector((state: TRootState) => state.application);
  const { isValidApplicationId } = useApplicationIdGuard();

  if (!isValidApplicationId) {
    return <Navigate to="/loan" replace />;
  }

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (completed[5]) {
    return <CompleteNotice />;
  }

  return (
    <section className="codePage">
      <h1 className="codePage__title">Please enter confirmation code</h1>
      <PinInput onComplete={handleCheckCode} length={4} />
      {error && <p className="codePage__error">{error}</p>}
    </section>
  );
};

export { CodePage };
