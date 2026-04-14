import { useState } from "react";
import { sliderCardConfig } from "@/utils";

export const useSlider = (cardsLength: number, containerWidth: number) => {
  const [index, setIndex] = useState(0);
  const cardParams = sliderCardConfig(containerWidth);

  const step = cardParams.cardWidth + cardParams.cardsGap;
  const visibleCards = containerWidth ? Math.floor(containerWidth / step) : 1;

  const maxIndex = Math.max(0, cardsLength - visibleCards);

  const isLastCard = index === maxIndex;
  const isFirstCard = index === 0;

  const wrapperFullWidth =
    (cardParams.cardWidth + cardParams.cardsGap) * cardsLength -
    cardParams.cardsGap;
  const maxScroll = wrapperFullWidth - containerWidth + 10;
  const translate = Math.min(index * step, maxScroll);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  return {
    index,
    isFirstCard,
    isLastCard,
    translate,
    cardParams,
    nextSlide,
    prevSlide,
  };
};
