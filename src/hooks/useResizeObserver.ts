import { useEffect, useState, type RefObject } from "react";

export const useResizeObserver = <T extends HTMLElement | null>(
  ref: RefObject<T>,
) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (entry) setWidth(entry.contentRect.width);
    });
    observer.observe(ref.current);
    
    return () => observer.disconnect();
  }, [ref]);

  return width;
};
