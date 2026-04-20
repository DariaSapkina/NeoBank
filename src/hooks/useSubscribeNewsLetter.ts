import { useState } from "react";
import {
  SUBSCRIBE_NEWS_LETTER_KEY,
  SUBSCRIBE_NEWS_LETTER_VALUE,
} from "@/constants";
import { emailValidate } from "@/utils";
import { subscribeNews } from "@/api";

export const useSubscribeNewsLetter = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubscribe, setIsSubscribe] = useState(
    () =>
      localStorage.getItem(SUBSCRIBE_NEWS_LETTER_KEY) ===
      SUBSCRIBE_NEWS_LETTER_VALUE,
  );

  const subscribeToNewsletter = async (email: string) => {
    try {
      await subscribeNews(email);

      localStorage.setItem(
        SUBSCRIBE_NEWS_LETTER_KEY,
        SUBSCRIBE_NEWS_LETTER_VALUE,
      );

      setIsSubscribe(true);

      return true;
    } catch {
      setError("Failed to subscribe");
      return false;
    } finally {
      setLoading(false);
    }
  };

  const handleSubscribe = (e: React.SubmitEvent, email: string) => {
    e.preventDefault();
    setLoading(true);

    const emailError = emailValidate(email);

    if (emailError) {
      setError(emailError);
      setLoading(false);
      return false;
    }

    setError(null);

    return subscribeToNewsletter(email);
  };

  return {
    isSubscribe,
    error,
    loading,
    handleSubscribe,
  };
};
