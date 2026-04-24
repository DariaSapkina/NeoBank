import { useState } from "react";
import sendIcon from "@/assets/sendIcon.svg";
import { Button } from "@/components";
import { useSubscribeNewsLetter } from "@/hooks";
import "./SubscribeSection.scss";

const SubscribeSection = () => {
  const { isSubscribe, loading, error, handleSubscribe } =
    useSubscribeNewsLetter();

  const [email, setEmail] = useState("");

  const submitForm = async (e: React.SubmitEvent) => {
    const isSuccessSumit = await handleSubscribe(e, email);
    if (isSuccessSumit) {
      setEmail("");
    }
  };

  return (
    <section className="subscribeSection">
      <h2 className="subscribeSection__title">Support</h2>
      <p className="subscribeSection__description">
        <span className="subscribeSection__descUp">
          Subscribe Newsletter & get
        </span>
        <span className="subscribeSection__descDown">Bank News</span>
      </p>
      <form
        className={`subscribeSection__form ${isSubscribe && "subscribeSection__form_isSubscribed"}`}
        onSubmit={submitForm}
        noValidate
      >
        {isSubscribe ? (
          <p className="subscribeSection__subscribeMessage">
            You are already subscribed to the bank's newsletter
          </p>
        ) : (
          <>
            <input
              name="email"
              className="subscribeSection__input"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              required
            />
            <div className="subscribeSection__buttonWrapper">
              <Button
                title={loading ? "Loading..." : "Subscribe"}
                radius="large"
                size="medium"
                icon={sendIcon}
                type="submit"
              />
            </div>
          </>
        )}
      </form>
      {error && <p className="subscribeSection__error">{error}</p>}
    </section>
  );
};

export { SubscribeSection };
