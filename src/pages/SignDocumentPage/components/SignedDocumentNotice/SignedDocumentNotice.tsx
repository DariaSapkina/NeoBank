import "./SignedDocumentNotice.scss";

const SignedDocumentNotice = () => {
  return (
    <section className="signedDocumentNotice">
      <h1 className="signedDocumentNotice__title">
        Documents have been successfully signed and sent for approval
      </h1>
      <p className="signedDocumentNotice__description">
        Within 10 minutes you will be sent a PIN code to your email for
        confirmation
      </p>
    </section>
  );
};

export { SignedDocumentNotice };
