import { PinInput, Spinner } from "@/components";
import { useCode } from "@/hooks";
import "./CodePage.scss";
import { CompleteNotice } from "./components";
import { Navigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import type { TRootState } from "@/store";

const CodePage = () => {
  const { error, handleCheckCode, loading } = useCode();

  const { applicationId: userAppId } = useSelector(
    (state: TRootState) => state.offers,
  );
  const { completed } = useSelector((state: TRootState) => state.application);
  const { applicationId } = useParams();
  if (!userAppId || String(userAppId) !== applicationId) {
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
    <div className="codePage">
      <h1 className="codePage__title">Please enter confirmation code</h1>
      <PinInput onComplete={handleCheckCode} length={4} />
      {error && <p className="codePage__error">{error}</p>}
    </div>
  );
};

export { CodePage };
