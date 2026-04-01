import "./SubscribeSection.scss";
import { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="subscribeSection">
      <h2 className="subscribeSection__title">Support</h2>
      <p className="subscribeSection__paragraphUp">
        Subscribe Newsletter & get
      </p>
      <p className="subscribeSection__paragraphDown">Bank News</p>
      <form className="subscribeSection__form">
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
        <button className="subscribeSection__button" type="submit">
          Subscribe
        </button>
      </form>
    </section>
  );
};

export { SubscribeSection };
