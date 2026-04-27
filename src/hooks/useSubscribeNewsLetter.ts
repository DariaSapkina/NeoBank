import { useState } from "react";
import {
  SUBSCRIBE_NEWS_LETTER_KEY,
  SUBSCRIBE_NEWS_LETTER_VALUE,
} from "@/constants";
import { emailValidate } from "@/utils";
import { subscribeNews } from "@/api";

export const useSubscribeNewsLetter = () => {
  const [error, setError] = useState<string | null>(null);
  const [isSubscribe, setIsSubscribe] = useState(
    () =>
      localStorage.getItem(SUBSCRIBE_NEWS_LETTER_KEY) ===
      SUBSCRIBE_NEWS_LETTER_VALUE,
  );
  const [isLoading, setIsLoading] = useState(false);

  const subscribeToNewsletter = async (email: string) => {
    try {
      const res = await subscribeNews(email);
      if (!res) {
        setError("Failed to subscribe");
        return false;
      }
      localStorage.setItem(
        SUBSCRIBE_NEWS_LETTER_KEY,
        SUBSCRIBE_NEWS_LETTER_VALUE,
      );
      setIsSubscribe(true);
      return true;
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubscribe = (e: React.SubmitEvent, email: string) => {
    e.preventDefault();
    setIsLoading(true);
    const emailError = emailValidate(email);

    if (emailError) {
      setError(emailError);
      setIsLoading(false);
      return false;
    }
    setError(null);

    return subscribeToNewsletter(email);
  };

  return {
    isSubscribe,
    error,
    handleSubscribe,
    isLoading,
  };
};
