import { useState } from "react";
import sendIcon from "@/assets/sendIcon.svg";
import "./SubscribeSection.scss";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="subscribeSection">
      <h2 className="subscribeSection__title">Support</h2>
      <p className="subscribeSection__description">
        <span className="subscribeSection__descUp">
          Subscribe Newsletter & get
        </span>
        <span className="subscribeSection__descDown">Bank News</span>
      </p>
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
          <img src={sendIcon} alt="" />
          <span>Subscribe</span>
        </button>
      </form>
    </section>
  );
};

export { SubscribeSection };
