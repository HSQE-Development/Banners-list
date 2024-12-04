import { useEffect, useState } from "react";

const useLongPress = (
  onLongPress: () => void,
  onRelease: () => void,
  ms = 500
) => {
  const [pressing, setPressing] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseDown = () => {
      setStartTime(Date.now());
      setPressing(true);
    };

    const handleMouseUp = () => {
      if (pressing && startTime) {
        const duration = Date.now() - startTime;
        if (duration >= ms) {
          onLongPress();
        }
      }
      setPressing(false);
      setStartTime(null);
      onRelease();
    };

    const handleTouchStart = () => {
      setStartTime(Date.now());
      setPressing(true);
    };

    const handleTouchEnd = () => {
      if (pressing && startTime) {
        const duration = Date.now() - startTime;
        if (duration >= ms) {
          onLongPress();
        }
      }
      setPressing(false);
      setStartTime(null);
      onRelease();
    };

    const handleContextMenu = (e: MouseEvent | TouchEvent) => {
      e.preventDefault(); // Desactiva el menú contextual
    };

    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    window.addEventListener("contextmenu", handleContextMenu);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [pressing, startTime, ms, onLongPress, onRelease]);

  return pressing;
};

export default useLongPress;
