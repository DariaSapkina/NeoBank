import { type FC } from "react";
import { usePIN } from "@/hooks";
import "./PinInput.scss";

export interface IPinInputProps {
  length: number;
  onComplete: (code: string) => void;
}

const PinInput: FC<IPinInputProps> = ({ length, onComplete }) => {
  const { values, setRef, handleChange, handleKeyDown } = usePIN(
    onComplete,
    length,
  );

  return (
    <div className="pinInput">
      {values.map((value, index) => (
        <div
          className={`pinInput__inputWrapper ${value && "pinInput__inputWrapper_filled"}`}
          key={index}
        >
          <input
            ref={setRef(index)}
            className="pinInput__input"
            value={value}
            onChange={(e) => handleChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            maxLength={1}
          />
        </div>
      ))}
    </div>
  );
};

export { PinInput };
