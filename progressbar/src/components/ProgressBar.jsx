import { useEffect } from "react";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
const ProgressBar = ({ value = 0 }) => {
  const [percentage, setPercentage] = useState(value);

  useEffect(() => {
    setPercentage(Math.min(100, Math.max(value, 0)));
  }, [value]);
  return (
    <div className="progress">
      <span>{percentage.toFixed()}%</span>
      <div
        style={{
          transform: `scaleX(${percentage / 100})`,
          transformOrigin: "left",
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
