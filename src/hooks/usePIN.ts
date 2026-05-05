import { useRef, useState } from "react";

export const usePIN = (onComplete: (code: string) => void, length: number) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));

  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
    if (value && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
    if (newValues.every((v) => v !== "")) {
      onComplete?.(newValues.join(""));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace") {
      if (!values[index] && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
    }
  };

  const setRef = (index: number) => (el: HTMLInputElement | null) => {
    inputsRef.current[index] = el;
  };

  return {
    setRef,
    handleKeyDown,
    handleChange,
    setValues,
    values,
  };
};
