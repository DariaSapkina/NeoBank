import { PinInput, Spinner } from "@/components";
import { useCode } from "@/hooks";
import "./CodePage.scss";
import { CompleteNotice } from "./components";

const CodePage = () => {
  const { error, handleCheckCode, loading, isSuccesCode } = useCode();

  if (loading) {
    return (
      <div className="spinnerWrapper">
        <Spinner />
      </div>
    );
  }

  if (isSuccesCode) {
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
