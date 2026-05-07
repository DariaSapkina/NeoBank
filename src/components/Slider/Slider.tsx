import { useRef, type FC } from "react";
import type { INews } from "@/types";
import { SliderCard, SliderButton } from "./components";
import { useResizeObserver, useSlider } from "@/hooks";
import { truncateText } from "@/utils";
import "./Slider.scss";

interface ISliderProps {
  articles: INews[];
};

const Slider: FC<ISliderProps> = ({ articles }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const containerWidth = useResizeObserver(containerRef);
  const {
    translate,
    isFirstCard,
    isLastCard,
    nextSlide,
    prevSlide,
    cardParams,
  } = useSlider(articles.length, containerWidth);

  return (
    <div className="slider" ref={containerRef}>
      <ul
        className="slider__cardsList"
        style={{
          transform: `translateX(-${translate}px)`,
          gap: `${cardParams.cardsGap}px`,
        }}
      >
        {articles.map((item, index) => (
          <li key={index} className="slider__card">
            <SliderCard
              title={truncateText(item.title, 60)}
              description={truncateText(item.description, 90)}
              url={item.url}
              urlToImage={item.urlToImage}
              width={cardParams.cardWidth}
            />
          </li>
        ))}
      </ul>
      <div className="slider__buttonsWrapper">
        <SliderButton
          direction="previous"
          isDisable={isFirstCard}
          onClick={prevSlide}
        />
        <SliderButton
          direction="next"
          isDisable={isLastCard}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
};

export { Slider };
