import type { FC } from "react";
import { ArrowIcon } from "../ArrowIcon";
import "./SliderButton.scss";

interface ISliderButtonProps {
  isDisable: boolean;
  direction: "next" | "previous";
  onClick: () => void;
};

const SliderButton: FC<ISliderButtonProps> = ({
  isDisable,
  direction,
  onClick,
}) => {
  return (
    <button
      className={`sliderButton ${isDisable && "sliderButton_disable"}`}
      aria-label={`Go to ${direction} slide`}
      onClick={onClick}
    >
      <div className={`sliderButton__img sliderButton__img_${direction}`}>
        <ArrowIcon />
      </div>
    </button>
  );
};

export { SliderButton };
