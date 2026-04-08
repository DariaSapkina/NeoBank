import { useState } from "react";
import sendIcon from "@/assets/sendIcon.svg";
import { Button } from "@/components";
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
        <div className="subscribeSection__buttonWrapper">
          <Button
            title="Subscribe"
            radius="large"
            size="medium"
            icon={sendIcon}
          />
        </div>
      </form>
    </section>
  );
};

export { SubscribeSection };
